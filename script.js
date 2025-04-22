
const exampleOutput = `[
    {
      "id": 1,
      "milestone": "Identify Smoking Triggers",
      "description": "Spend a few hours reflecting on situations, emotions, and environments that prompt you to smoke. Document your observations.",
      "time_required": "a few hours"
    },
    {
      "id": 2,
      "milestone": "Research Cessation Methods",
      "description": "Dedicate a few hours to reading about different quitting methods (nicotine replacement, medications, counseling, etc.) to determine what might work best for you.",
      "time_required": "a few hours"
    },
    {
      "id": 3,
      "milestone": "Set a Quit Date",
      "description": "Choose a specific quit date within the next week to mark the official start of your smoke-free journey.",
      "time_required": "a few hours"
    },
    {
      "id": 4,
      "milestone": "Inform Your Support Network",
      "description": "Spend a few hours talking to friends, family, or colleagues about your decision to quit, asking for their encouragement and support.",
      "time_required": "a few hours"
    },
    {
      "id": 5,
      "milestone": "Prepare a Smoking Journal",
      "description": "Create a log or journal to track your smoking habits, triggers, and progress. Use this tool to reflect on patterns and successes.",
      "time_required": "a few hours"
    }
]`;

// Get input element and button 
const input = document.getElementById('goal-text');
const tasksContainer = document.getElementById('tasks-container');
const tasksSection = document.getElementById('tasks-section');

const gptPromptTemplateV1 = '\
Provide a list of 20 suggestions for milestones for an individual \
who wants to achieve the following goal: ${goal}. You are to provide \
these so that they can be completed with a range of time requirements, \
from a few hours up to a few weeks. Where possible, quests should \
build on top of previous, more easily attainable quests, to provide \
a feeling of achievement for making progress in a few specific areas. \
You should return your results in the json format. You should only \
provide the json. You should not provide any additional text.';

const gptPromptTemplateV2 = '\
Provide a list of 20 suggestions for milestones for an individual \
who wants to achieve the following goal: ${goal}.\
\
You are to provide these so that they can be completed with \
a range of time requirements, from a few hours up to a few weeks. \
Where possible, quests should build on top of previous, more \
easily attainable quests, to provide a feeling of achievement for \
making progress in a few specific areas. \
\
You should return your results in the json format. \
You should only provide the json. You should not provide \
any additional text. You should provide the result as plain text, not markdown.'

// async function getGoals() {
//   const goalTextClean = sanitizeInput(input.value);

//   // Put user input into the prompt
//   const GptPrompt = gptPromptTemplateV2.replace('${goal}', goalTextClean);

//   console.log("User input:");
//   console.log(goalTextClean);
//   console.log("Prompt:");
//   console.log(GptPrompt);

//   try {
//       // Call OpenAI API using fetch
//       const response = await fetch('https://api.openai.com/v1/chat/completions', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `Bearer MY_OPENAI_API_KEY` // Replace with your OpenAI API key
//           },
//           body: JSON.stringify({
//               model: "gpt-4.1-nano",
//               messages: [
//                   { role: "user", content: GptPrompt }
//               ]
//           })
//       });

//       if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();

//       console.log("Response:");
//       console.log(data.choices[0].message.content);

//       // Parse the response
//       const parsedGoals = JSON.parse(data.choices[0].message.content);

//       console.log("Parsed goals:");
//       console.log(parsedGoals);

//       setTasksContainerOutput(parsedGoals);
//   } catch (error) {
//       console.error("Error calling OpenAI API:", error);
//   }
// }

async function getGoals() {
    const goalTextClean = sanitizeInput(input.value);

    // Put user input into the prompt
    const GptPrompt = gptPromptTemplateV2.replace('${goal}', goalTextClean);

    console.log("User input:");
    console.log(goalTextClean);
    console.log("Prompt:");
    console.log(GptPrompt);

    try {
        const response = await fetch('http://localhost:3005/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: GptPrompt
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log("Response:");
        console.log(data);

        // Parse the response
        const parsedGoals = JSON.parse(data);

        console.log("Parsed goals:");
        console.log(parsedGoals);

        setTasksContainerOutput(parsedGoals);
    } catch (error) {
        console.error("Error calling backend server:", error);
    }
}

const getGoalsButton = document.getElementById('get-tasks');
getGoalsButton.addEventListener('click', getGoals);

function sanitizeInput(input) {
    return input.replace(/[^a-zA-Z0-9 ]/g, '');
}

function setTasksContainerOutput(goals){
    // clear the tasks container
    tasksContainer.innerHTML = '';

    // loop through the goals and add them to the tasks container
    goals.forEach(goal => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = createTaskHTML(goal);
        tasksContainer.appendChild(taskElement);
    });

    tasksSection.classList.remove('hidden');
}

function createTaskHTML(task) {
    return `
        <h3 class="task-tite">${task.milestone}</h3>
        <input type="checkbox" id="task-${task.id}">
        <label for="task-${task.id}">${task.description}</label>
        <p>Time required: ${task.time_required}</p>
    `;
}
  
