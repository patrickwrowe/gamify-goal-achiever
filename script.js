
const debugOutputs = {
    "1": `[
            {
                "id": 1,
                "milestone": "Set Up Your Development Environment",
                "time_required": "a few hours",
                "description": "Install essential tools like IDEs, version control systems, and configure your environment for efficient coding."
            },
            {
                "id": 2,
                "milestone": "Master Version Control",
                "time_required": "1-2 days",
                "description": "Learn Git fundamentals, branching, merging, and best practices for collaborative development."
            },
            {
                "id": 3,
                "milestone": "Build a Personal Portfolio Website",
                "time_required": "1 week",
                "description": "Create a simple yet professional website to showcase projects and skills, practicing front-end development."
            },
            {
                "id": 4,
                "milestone": "Contribute to Open Source",
                "time_required": "2-4 weeks",
                "description": "Find beginner-friendly open source projects and make meaningful contributions to understand real-world codebases."
            },
            {
                "id": 5,
                "milestone": "Deepen Data Structures and Algorithms Knowledge",
                "time_required": "2-3 weeks",
                "description": "Practice core algorithms and data structures through coding challenges on platforms like LeetCode or HackerRank."
            },
            {
                "id": 6,
                "milestone": "Build a Full-Stack Application",
                "time_required": "3-4 weeks",
                "description": "Create a project that includes both frontend and backend components, integrating concepts learned so far."
            },
            {
                "id": 7,
                "milestone": "Learn about System Design Basics",
                "time_required": "1-2 weeks",
                "description": "Study fundamental system design principles and create simple architecture diagrams for scalable systems."
            },
            {
                "id": 8,
                "milestone": "Write Unit and Integration Tests",
                "time_required": "1 week",
                "description": "Implement testing strategies for your codebases to improve reliability and robustness."
            },
            {
                "id": 9,
                "milestone": "Optimize Your Code",
                "time_required": "1 week",
                "description": "Refactor existing projects for performance, readability, and maintainability."
            },
            {
                "id": 10,
                "milestone": "Practice Code Review and Mentorship",
                "time_required": "1-2 weeks",
                "description": "Review others' code and seek feedback on your own projects to improve coding standards and practices."
            },
            {
                "id": 11,
                "milestone": "Learn Design Patterns",
                "time_required": "2 weeks",
                "description": "Study common design patterns and implement them in your projects for scalable architecture."
            },
            {
                "id": 12,
                "milestone": "Master a Backend Framework",
                "time_required": "2-3 weeks",
                "description": "Gain proficiency in popular backend frameworks like Node.js, Django, or Spring Boot."
            },
            {
                "id": 13,
                "milestone": "Build a RESTful API",
                "time_required": "1 week",
                "description": "Design and implement a secure, scalable API to interact with frontend interfaces or third-party services."
            },
            {
                "id": 14,
                "milestone": "Implement Continuous Integration/Continuous Deployment (CI/CD)",
                "time_required": "1-2 weeks",
                "description": "Automate testing and deployment pipelines to improve development workflows."
            },
            {
                "id": 15,
                "milestone": "Learn Cloud Services",
                "time_required": "2 weeks",
                "description": "Get familiar with cloud platforms like AWS, Azure, or GCP, and deploy your applications."
            },
            {
                "id": 16,
                "milestone": "Contribute to Large-Scale Projects",
                "time_required": "3-4 weeks",
                "description": "Participate in complex, large codebases to understand scalability and maintainability challenges."
            },
            {
                "id": 17,
                "milestone": "Improve Soft Skills and Communication",
                "time_required": "ongoing, but initial focus: 1 week",
                "description": "Practice effective communication, code documentation, and technical writing."
            },
            {
                "id": 18,
                "milestone": "Stay Updated with Industry Trends",
                "time_required": "ongoing, with weekly review",
                "description": "Regularly read tech blogs, attend webinars, and participate in developer communities."
            },
            {
                "id": 19,
                "milestone": "Teach Others or Write Technical Content",
                "time_required": "2-3 weeks",
                "description": "Solidify knowledge by creating tutorials, blog posts, or giving talks on technical topics."
            },
            {
                "id": 20,
                "milestone": "Build a Signature Project Demonstrating Mastery",
                "time_required": "4-6 weeks",
                "description": "Create a complex, multi-faceted project that combines design, development, testing, deployment, and documentation, showcasing your skills as a 10x engineer."
            }
        ]`,

    "2": `[
    {
        "id": 1,
        "milestone": "Research Apple Varieties",
        "description": "Learn about different types of apples to discover your favorites.",
        "time_required": "1 hour"
    },
    {
        "id": 2,
        "milestone": "Visit a Local Market",
        "description": "Pick out a variety of fresh apples to try.",
        "time_required": "1-2 hours"
    },
    {
        "id": 3,
        "milestone": "Buy Your First Apple",
        "description": "Purchase an apple to incorporate into your snack routine.",
        "time_required": "15 minutes"
    },
    {
        "id": 4,
        "milestone": "Try a New Apple Variety",
        "description": "Experiment with a different type of apple than your usual.",
        "time_required": "30 minutes"
    },
    {
        "id": 5,
        "milestone": "Incorporate Apples into Breakfast",
        "description": "Add sliced apples to your morning oatmeal or yogurt.",
        "time_required": "30 minutes"
    },
    {
        "id": 6,
        "milestone": "Share an Apple Snack",
        "description": "Offer a sliced apple to a friend or family member.",
        "time_required": "15 minutes"
    },
    {
        "id": 7,
        "milestone": "Create an Apple Recipe",
        "description": "Bake apple muffins or prepare cinnamon baked apples.",
        "time_required": "2-3 hours"
    },
    {
        "id": 8,
        "milestone": "Participate in a Tasting Event",
        "description": "Attend an apple tasting or orchard visit to deepen your appreciation.",
        "time_required": "2-4 hours"
    },
    {
        "id": 9,
        "milestone": "Set a Daily Apple Goal",
        "description": "Aim to eat at least one apple each day for a week.",
        "time_required": "1 week"
    },
    {
        "id": 10,
        "milestone": "Track Your Apple Consumption",
        "description": "Keep a journal of how many apples you eat each day.",
        "time_required": "1 week"
    },
    {
        "id": 11,
        "milestone": "Experiment with Apple Juices and Ciders",
        "description": "Try different varieties of apple juice or cider options.",
        "time_required": "1-2 hours"
    },
    {
        "id": 12,
        "milestone": "Create an Apple-Themed Meal Plan",
        "description": "Plan meals that incorporate apples regularly for a week.",
        "time_required": "2-3 hours"
    },
    {
        "id": 13,
        "milestone": "Introduce Apple Snacks at Work or School",
        "description": "Keep sliced apples handy for healthy snacking during the day.",
        "time_required": "1 hour for preparation"
    },
    {
        "id": 14,
        "milestone": "Share Your Apple Journey",
        "description": "Post about your apple eating experience on social media or with friends.",
        "time_required": "30 minutes"
    },
    {
        "id": 15,
        "milestone": "Try Cooking with Apples",
        "description": "Make an apple-based dish such as apple sauce, pie, or salad.",
        "time_required": "3-4 hours"
    },
    {
        "id": 16,
        "milestone": "Attend an Apple Orchard Picking Day",
        "description": "Spend a day picking apples in an orchard for fresh, local fruit.",
        "time_required": "4-6 hours"
    },
    {
        "id": 17,
        "milestone": "Create an Apple Tasting Event at Home",
        "description": "Invite friends over to taste different apple varieties and recipes.",
        "time_required": "3-4 hours"
    },
    {
        "id": 18,
        "milestone": "Implement a Weekly Apple Challenge",
        "description": "Challenge yourself to try new apple recipes or varieties each week.",
        "time_required": "Ongoing, weekly"
    },
    {
        "id": 19,
        "milestone": "Incorporate Apples into Your Evening Routine",
        "description": "Enjoy a light apple snack after dinner to reinforce the habit.",
        "time_required": "15 minutes"
    },
    {
        "id": 20,
        "milestone": "Reflect and Celebrate Your Progress",
        "description": "Assess how your apple consumption has increased and enjoy your accomplishments.",
        "time_required": "1 hour"
    }
]`,
    "3": `[
    {
        "id": 1,
        "milestone": "Research Terraforming Basics",
        "description": "Learn foundational concepts and techniques used in planetary terraforming.",
        "time_required": "a few hours"
    },
    {
        "id": 2,
        "milestone": "Study Planetary Environments",
        "description": "Analyze the atmosphere, temperature, and terrain of a target planet.",
        "time_required": "a few hours"
    },
    {
        "id": 3,
        "milestone": "Gather Terraforming Resources",
        "description": "Identify and compile a list of tools, technologies, and materials needed for terraforming.",
        "time_required": "several hours"
    },
    {
        "id": 4,
        "milestone": "Simulate Terraforming Scenarios",
        "description": "Use software models to simulate terraforming processes on a virtual planet.",
        "time_required": "a few days"
    },
    {
        "id": 5,
        "milestone": "Prepare Terraforming Tools",
        "description": "Set up or acquire the key equipment and technology for planetary modification.",
        "time_required": "several days"
    },
    {
        "id": 6,
        "milestone": "Create a Detailed Terraforming Plan",
        "description": "Draft a step-by-step plan for terraforming a specific planet, including timelines and contingencies.",
        "time_required": "a week"
    },
    {
        "id": 7,
        "milestone": "Identify Suitable Candidate Planets",
        "description": "Research and select planets that are viable candidates for terraforming based on desired conditions.",
        "time_required": "a few days"
    },
    {
        "id": 8,
        "milestone": "Design Pilot Terraforming Project",
        "description": "Design a small-scale, pilot project to test terraforming techniques on a planetary section or moon.",
        "time_required": "a week"
    },
    {
        "id": 9,
        "milestone": "Implement First Terraforming Experiment",
        "description": "Carry out a controlled terraform experiment on a designated planetary area or moon.",
        "time_required": "several weeks"
    },
    {
        "id": 10,
        "milestone": "Monitor and Analyze Results",
        "description": "Gather data from the experiment and evaluate effectiveness and challenges.",
        "time_required": "a few weeks"
    },
    {
        "id": 11,
        "milestone": "Refine Terraforming Techniques",
        "description": "Adjust methods based on experimental results to improve effectiveness.",
        "time_required": "a few weeks"
    },
    {
        "id": 12,
        "milestone": "Develop a Terraforming Schedule",
        "description": "Create a detailed timeline for scaling up terraforming projects across a planet.",
        "time_required": "several weeks"
    },
    {
        "id": 13,
        "milestone": "Secure Funding and Resources",
        "description": "Obtain necessary funding, materials, or partnerships for larger projects.",
        "time_required": "a few weeks"
    },
    {
        "id": 14,
        "milestone": "Initiate Large-scale Terraforming",
        "description": "Begin extensive terraforming operations on the target planet.",
        "time_required": "several weeks to months"
    },
    {
        "id": 15,
        "milestone": "Establish Terraforming Monitoring Systems",
        "description": "Set up sensors and data collection for ongoing planet monitoring.",
        "time_required": "a few weeks"
    },
    {
        "id": 16,
        "milestone": "Implement Continuous Improvement Protocols",
        "description": "Develop procedures to adapt and optimize terraforming efforts based on data.",
        "time_required": "several weeks"
    },
    {
        "id": 17,
        "milestone": "Achieve Initial Habitability",
        "description": "Confirm that the planet's environment supports basic life forms and human activity.",
        "time_required": "several months"
    },
    {
        "id": 18,
        "milestone": "Establish Self-sustaining Ecosystems",
        "description": "Introduce and stabilize basic ecosystems to support future life and stability.",
        "time_required": "months to a year"
    },
    {
        "id": 19,
        "milestone": "Develop Terraforming Automation",
        "description": "Create autonomous systems and AI to manage ongoing planetary modifications.",
        "time_required": "several months"
    },
    {
        "id": 20,
        "milestone": "Regularly Schedule Terraforming Missions",
        "description": "Establish a routine schedule for ongoing planetary terraforming updates and improvements.",
        "time_required": "ongoing, recurring"
    }
]`,
    "4": `[
    {
        "id": 1,
        "milestone": "Breathing Awareness",
        "description": "Practice focused breathing for 5 minutes to introduce mindfulness.",
        "time_required": "a few minutes"
    },
    {
        "id": 2,
        "milestone": "Daily Mindful Moment",
        "description": "Set aside 10 minutes daily to simply observe your surroundings without judgment.",
        "time_required": "10 minutes per day"
    },
    {
        "id": 3,
        "milestone": "Gratitude Journal",
        "description": "Write down three things you are grateful for each day.",
        "time_required": "5-10 minutes daily"
    },
    {
        "id": 4,
        "milestone": "Simplify Your Space",
        "description": "Declutter a small area of your home to foster mental clarity.",
        "time_required": "one weekend or a few hours"
    },
    {
        "id": 5,
        "milestone": "Silent Meditation",
        "description": "Practice 15-minute silent meditation to cultivate inner calm.",
        "time_required": "15 minutes"
    },
    {
        "id": 6,
        "milestone": "Nature Connection",
        "description": "Spend 30 minutes outside observing nature without distractions.",
        "time_required": "30 minutes"
    },
    {
        "id": 7,
        "milestone": "Mindful Eating",
        "description": "Eat a meal slowly, paying full attention to each bite and sensation.",
        "time_required": "one meal"
    },
    {
        "id": 8,
        "milestone": "Body Scan Meditation",
        "description": "Practice a 20-minute body scan to increase bodily awareness.",
        "time_required": "20 minutes"
    },
    {
        "id": 9,
        "milestone": "Digital Detox",
        "description": "Disconnect from digital devices for a half-day to reduce mental clutter.",
        "time_required": "half a day"
    },
    {
        "id": 10,
        "milestone": "Walking Meditation",
        "description": "Engage in a 30-minute mindful walking session, focusing on each step.",
        "time_required": "30 minutes"
    },
    {
        "id": 11,
        "milestone": "Practicing Non-judgment",
        "description": "Observe your thoughts without attaching judgments for 10 minutes daily.",
        "time_required": "10 minutes daily"
    },
    {
        "id": 12,
        "milestone": "Read about Zen and Mindfulness",
        "description": "Read a book or articles to deepen understanding of Zen philosophy.",
        "time_required": "a few hours"
    },
    {
        "id": 13,
        "milestone": "Create a Zen Space",
        "description": "Designate a small corner in your home dedicated to meditation and reflection.",
        "time_required": "a few hours"
    },
    {
        "id": 14,
        "milestone": "Attend a Meditation Workshop",
        "description": "Participate in a guided meditation or Zen practice class.",
        "time_required": "a few hours to a day"
    },
    {
        "id": 15,
        "milestone": "Practice Loving-Kindness Meditation",
        "description": "Dedicate 20 minutes to meditation fostering compassion for yourself and others.",
        "time_required": "20 minutes"
    },
    {
        "id": 16,
        "milestone": "Weekly Reflection Journal",
        "description": "Reflect on your progress and experiences with mindfulness and Zen over a week.",
        "time_required": "15-20 minutes per week"
    },
    {
        "id": 17,
        "milestone": "Establish a Morning Routine",
        "description": "Start each day with a short meditation or mindful practice to set intentions.",
        "time_required": "10-15 minutes daily"
    },
    {
        "id": 18,
        "milestone": "Practice Acceptance Exercises",
        "description": "Learn and practice exercises that foster acceptance of things beyond control.",
        "time_required": "a few hours over a week"
    },
    {
        "id": 19,
        "milestone": "Deepen Meditation Practice",
        "description": "Extend meditation sessions to 30-45 minutes over several weeks.",
        "time_required": "30-45 minutes per session"
    },
    {
        "id": 20,
        "milestone": "Integrate Zen Principles into Daily Life",
        "description": "Consistently apply mindfulness and Zen principles in daily activities for sustained calm and clarity.",
        "time_required": "ongoing"
    }
]`
};

// Get input element and button 
const input = document.getElementById('goal-text');
const tasksContainer = document.getElementById('tasks-container');
const tasksSection = document.getElementById('tasks-section');
const debugInputDropdown = document.getElementById('debug-prompt-select');



const gptPromptTemplateV1 = `\
Provide a list of 20 suggestions for milestones for an individual 
who wants to achieve the following goal: {goal}. You are to provide 
these so that they can be completed with a range of time requirements,
from a few hours up to a few weeks. Where possible, quests should 
build on top of previous, more easily attainable quests, to provide 
a feeling of achievement for making progress in a few specific areas. 
You should return your results in the json format. You should only 
provide the json. You should not provide any additional text.`;

const gptPromptTemplateV2 = `
Provide a list of 20 suggestions for milestones for an individual 
who wants to achieve the following goal: {goal}.

You are to provide these so that they can be completed with 
a range of time requirements, from a few hours up to a few weeks. 
Where possible, quests should build on top of previous, more 
easily attainable quests, to provide a feeling of achievement for 
making progress in a few specific areas. 

You should return your results as a list of json formatted objects, with the following structure:
[
    {
        "id": 1,
        "milestone": "title text",
        "description": "description text",
        "time_required": "time required text",
        
    }
]

The id should be a unique number for each milestone, starting from 1.
The milestone should be a short title for the milestone.
The description should be a short description of the milestone.
The time_required should be a short description of the time required to complete the milestone.
You should only provide the json. You should not provide any additional text.
You should provide the result as plain text, do not use markdown.
`;

async function getGoals() {
    const goalTextClean = sanitizeInput(input.value);

    let parsedGoals = null;

    console.log("Getting goals...");
    console.log("Debug input selected:", debugInputDropdown.value);
    
    if (debugInputDropdown.value) {
        console.log("Debug input selected");
        parsedGoals = JSON.parse(debugOutputs[debugInputDropdown.value]);
    } else {
        // Put user input into the prompt
        const GptPrompt = gptPromptTemplateV2.replace('{goal}', goalTextClean);
    
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
            parsedGoals = JSON.parse(data);
        } catch (error) {
            console.error("Error calling backend server:", error);
        }
    }
        
    console.log("Parsed goals:");
    console.log(parsedGoals);

    setTasksContainerOutput(parsedGoals);
    }


const getGoalsButton = document.getElementById('get-tasks');
getGoalsButton.addEventListener('click', getGoals);

function sanitizeInput(input) {
    return input.replace(/[^a-zA-Z0-9 ]/g, '');
}

function setTasksContainerOutput(goals){
    // clear the tasks container
    tasksContainer.innerHTML = '';

    console.log(goals);

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
        <h3 class="task-title">${task.milestone}</h3>
        <input type="checkbox" id="task-${task.id}">
        <label for="task-${task.id}">${task.description}</label>
        <p>Time required: ${task.time_required}</p>
    `;
}
  
