import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// POST Route: /api/chat
app.post('/api/chat', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required in the request body." });
    }

    try {
        console.log(`Sending prompt to Ollama: "${prompt}"`);

        // Ollama API call
        const ollamaResponse = await axios.post('http://127.0.0.1:11434/api/generate', {
            model: 'llama3.2:latest', // Agar aapke paas koi aur model hai to uska naam yahan likhein (e.g., 'mistral')
            prompt: prompt,
            stream: false 
        });

        res.json({
            success: true,
            model: ollamaResponse.data.model,
            response: ollamaResponse.data.response
        });

    } catch (error) {
        console.error("Error communicating with Ollama:", error.message);
        res.status(500).json({
            success: false,
            error: "Could not connect to local Ollama instance. Make sure Ollama is running."
        });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Express server is running globally on port ${PORT}`);
});