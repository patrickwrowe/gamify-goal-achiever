# gamify-goal-achiever# gamify-goal-achiever

# Gamify Goal Achiever

Gamify Goal Achiever is a web application designed to help users achieve their goals by breaking them into smaller, actionable tasks. Inspired by video game quests, this tool provides a structured and motivating way to tackle objectives. By leveraging OpenAI's GPT model, the application generates personalized milestone suggestions tailored to the user's input.

<img width="633" alt="Screenshot 2025-04-21 at 19 10 05" src="https://github.com/user-attachments/assets/9aed096f-ce82-4b65-920d-1e5665292d06" />

^ Example output for a simple goal.

This is only intended to be a quick and fun way to experiment with the ChatGPT API, it's of course not remotely fully-functional, and some of the suggested tasks range unimaginative to nonsensical, but that's half the fun. 

## Why ChatGPT is Essential

ChatGPT is a critical component of this project because of its ability to generate human-like, personalized responses. It interprets user input and creates milestone suggestions that are specific, creative, and actionable. ChatGPT will even provide friendly hallucinations if the user input is for a goal which doesn't exactly make sense (see dummy input "Terraform planets more regularly"). Traditional programming methods would struggle to replicate this level of customization and efficiency. The model also automates the generation of structured, JSON-formatted responses, which would otherwise require significant manual effort. This makes ChatGPT (or another LLM) not just a useful tool but likely one of the only viable solutions for generating such detailed and personalized user responses.

## Features

The application allows users to input a goal, which is then processed by ChatGPT to generate a list of 20 milestones. These milestones are displayed as tasks, complete with descriptions and time estimates. Users can interact with the interface to mark tasks as completed - although, right now this doesn't achieve much. 

## Setting Up Locally

To set up the application on your local machine, ensure you have Node.js installed and an OpenAI API key. Clone the repository, install dependencies, and create a `.env` file in the root directory to store your API key securely (or have this specified in your environment as in the openAI documentation: https://platform.openai.com/docs/quickstart?api-mode=responses). Start the backend server using `node server.mjs`, which will run on `http://localhost:3005`. Open the `index.html` file in your browser to access the frontend. For testing, input a goal, click the "Achieve your goal!" button, and view the generated milestones.

Replace the placeholder API key in the `.env` file with your actual OpenAI API key. The backend server will handle requests to the OpenAI API and return the generated milestones to the frontend.

Demoing without an openAI API key is possible using the debug dropdown menu in the frontend. This will generate a set of dummy milestones for testing purposes.

## Notes on Development

The backend server is configured with permissive CORS settings for development purposes. In production, restrict access to trusted origins. Additionally, replace the placeholder model name (`gpt-4.1-nano`) with the actual model you intend to use, such as `gpt-4`, for better results (maybe).
