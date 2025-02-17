//import OpenAI from "openai";

const exampleOutput = [
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
    },
    {
      "id": 6,
      "milestone": "Purchase Cessation Tools",
      "description": "Based on your research, acquire nicotine patches, gum, or other aids that can help manage withdrawal symptoms.",
      "time_required": "a few hours"
    },
    {
      "id": 7,
      "milestone": "Establish a Healthy Replacement Activity",
      "description": "Identify and start practicing an alternative activity (like deep breathing, walking, or a hobby) to replace the urge to smoke during breaks.",
      "time_required": "a few days"
    },
    {
      "id": 8,
      "milestone": "Gradually Reduce Cigarette Intake",
      "description": "Over the course of one week, slowly cut back on the number of cigarettes you smoke each day, noting your progress in your journal.",
      "time_required": "one week"
    },
    {
      "id": 9,
      "milestone": "Practice Mindfulness and Stress Relief",
      "description": "Integrate a daily mindfulness or meditation practice (e.g., 10 minutes a day) to help manage cravings and reduce stress.",
      "time_required": "one week"
    },
    {
      "id": 10,
      "milestone": "Avoid Known Triggers",
      "description": "For one week, actively avoid situations and environments identified as smoking triggers to reinforce new habits.",
      "time_required": "one week"
    },
    {
      "id": 11,
      "milestone": "Join a Support Group",
      "description": "Attend at least one meeting of a local or online smoking cessation support group to share experiences and receive advice.",
      "time_required": "a few hours"
    },
    {
      "id": 12,
      "milestone": "Implement a Reward System",
      "description": "Design a system of small rewards for meeting your daily or weekly reduction goals, reinforcing your progress.",
      "time_required": "a few hours"
    },
    {
      "id": 13,
      "milestone": "Substitute Smoking with Healthy Snacks",
      "description": "Experiment for one week with replacing smoking breaks by enjoying healthy snacks or engaging in a brief physical activity.",
      "time_required": "one week"
    },
    {
      "id": 14,
      "milestone": "Establish a New Daily Routine",
      "description": "Reorganize your daily habits to minimize triggers (e.g., start your day with exercise or a non-smoking coffee ritual).",
      "time_required": "a few days"
    },
    {
      "id": 15,
      "milestone": "Achieve a Full Day Smoke-Free",
      "description": "Challenge yourself to go one entire day without smoking, using your new coping strategies when cravings hit.",
      "time_required": "one day"
    },
    {
      "id": 16,
      "milestone": "Reach a Smoke-Free Week",
      "description": "Build on your day-long success and aim for a full week without smoking, tracking your progress in your journal.",
      "time_required": "one week"
    },
    {
      "id": 17,
      "milestone": "Reflect on Your Progress",
      "description": "Spend a few hours journaling about your experiences during your smoke-free week, noting challenges and triumphs.",
      "time_required": "a few hours"
    },
    {
      "id": 18,
      "milestone": "Consult a Healthcare Professional",
      "description": "Arrange a session with a doctor or therapist to discuss long-term strategies, address concerns, and adjust your plan as needed.",
      "time_required": "a few hours"
    },
    {
      "id": 19,
      "milestone": "Develop a Relapse Prevention Plan",
      "description": "Create a detailed plan outlining strategies and actions to take if you feel tempted to smoke again, including coping mechanisms and support contacts.",
      "time_required": "a few hours"
    },
    {
      "id": 20,
      "milestone": "Celebrate One Month Smoke-Free",
      "description": "After building up your success over several weeks, reward yourself for a month without smoking by celebrating in a meaningful way and setting new health goals.",
      "time_required": "a few weeks"
    }
]

// Get input element and button 
const input = document.getElementById('goal-text');
const button = document.getElementById('get-goals');

// Add event listener to button
button.addEventListener('click', getGoals);

// Create a new instance of the OpenAI class
//const openai = new OpenAI();

const gptPromptTemplateV1 = "Provide a list of 20 suggestions for milestones for an individual who wants to achieve the following goal: ${goal}. You are to provide these so that they can be completed with a range of time requirements, from a few hours up to a few weeks. Where possible, quests should build on top of previous, more easily attainable quests, to provide a feeling of achievement for making progress in a few specific areas. You should return your results in the json format. You should only provide the json. You should not provide any additional text."

function getGoals() {
    console.log("Button clicked");
    const goalTextClean = sanitizeInput(input.value);
    console.log(goalTextClean);

    console.log("here")
    console.log(exampleOutput[0].id);
    console.log(exampleOutput[0].milestone);
    console.log(exampleOutput[0].description);
}

function sanitizeInput(input) {
    return input.replace(/[^a-zA-Z0-9 ]/g, '');
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