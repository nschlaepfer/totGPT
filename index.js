import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
import main from './src/index';

dotenv.config();

const prompt = "Your prompt";
const numAsks = 5;
const apiKey = process.env.OPENAI_KEY;
const model = "gpt-4";

const runScript = async () => {
    try {
        const result = await main(prompt, numAsks, apiKey, model);
        // Save the result or perform further operations as needed
    } catch (error) {
        console.error("An error occurred: ", error);
    }
};

runScript();
