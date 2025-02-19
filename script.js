//import OpenAI from "openai";

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
const button = document.getElementById('get-goals');
const tasksContainer = document.getElementById('tasks-container');
const tasksSection = document.getElementById('tasks-section');

// Add event listener to button
button.addEventListener('click', getGoals);

// Create a new instance of the OpenAI class
//const openai = new OpenAI();

const gptPromptTemplateV1 = '\
Provide a list of 20 suggestions for milestones for an individual \
who wants to achieve the following goal: ${goal}. You are to provide \
these so that they can be completed with a range of time requirements, \
from a few hours up to a few weeks. Where possible, quests should \
build on top of previous, more easily attainable quests, to provide \
a feeling of achievement for making progress in a few specific areas. \
You should return your results in the json format. You should only \
provide the json. You should not provide any additional text.';

function getGoals() {

    const goalTextClean = sanitizeInput(input.value);
    const parsedGoals = JSON.parse(exampleOutput);

    setTasksContainerOutput(parsedGoals);
}

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

/*
const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
        {"role": "user", "content": `${GptPrompt}`}
    ]
});    

console.log(completion.data.choices[0].message.content);
*/