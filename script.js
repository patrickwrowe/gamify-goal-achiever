import OpenAI from "openai";

// Get input element and button 
const input = document.getElementById('goal-text');
const button = document.getElementById('get-goals');

// Create a new instance of the OpenAI class
const openai = new OpenAI();

const gptPromptTemplateV1 = "Provide a list of 20 suggestions for milestones for an individual who wants to achieve the following goal: ${goal}. You are to provide these so that they can be completed with a range of time requirements, from a few hours up to a few weeks. Where possible, quests should build on top of previous, more easily attainable quests, to provide a feeling of achievement for making progress in a few specific areas. You should return your results in the json format. You should only provide the json. You should not provide any additional text."

function sanitizeInput(input) {
    return input.replace(/[^a-zA-Z0-9]/g, '');
}

async function getGptGoalCompletion() {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        store: true,
        messages: [
            {"role": "user", "content": `${GptPrompt}`}
        ]
    });    
}
