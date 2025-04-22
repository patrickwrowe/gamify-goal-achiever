import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from a .env file

const app = express();
const port = 3005;

app.use(cors({
    // origin: (origin, callback) => {
    //     const allowedOrigins = ['http://localhost:3005', 'http://127.0.0.1:3005'];
    //     if (!origin || allowedOrigins.includes(origin)) {
    //         callback(null, true);
    //     } else {
    //         callback(new Error('Not allowed by CORS'));
    //     }
    // },
    origin: '*', // Allow all origins for development purposes
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Load API key from environment variables
});


app.post('/api/generate', async (req, res) => {
    const { prompt } = req.body;

    console.log("Received prompt:", prompt);

    try {
        const completion = await openai.responses.create({
            model: "gpt-4.1-nano",
            input: prompt,
        });

        console.log("OpenAI API response:");
        console.log(completion);

        res.json(completion.output_text);
    } catch (error) {
        console.error("Error with OpenAI API:", error);

        // Ensure CORS headers are included in the error response
        res.status(500).json({ error: "Failed to generate response" });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});