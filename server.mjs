import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from a .env file

const app = express();
const port = 3005;

// Configure CORS to allow requests from your frontend
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's origin
    methods: ['GET', 'POST'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type'], // Allow specific headers
}));

app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Load API key from environment variables
});

app.post('/api/generate', async (req, res) => {
    const { prompt } = req.body;

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }]
        });

        res.json(completion.data.choices[0].message.content);
    } catch (error) {
        console.error("Error with OpenAI API:", error);
        res.status(500).json({ error: "Failed to generate response" });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});