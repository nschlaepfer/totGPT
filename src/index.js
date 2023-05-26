import dotenv from 'dotenv';
import { ChatGPT } from "./chatbot";
import { generate_thoughts } from "./generate";
import { evaluate_thoughts } from "./evaluate";
import { search_best_thoughts } from "./search";

dotenv.config();

const main = async (prompt, numAsks, apiKey, model = "gpt-4") => {
    console.log("Starting script...");

    if (!apiKey) {
        throw new Error("API Key not found. Please check your request.");
    }

    const NUM_ASKS = Number(numAsks);

    const chatGPT = new ChatGPT(apiKey, model);

    let thoughts = [];
    let scores = [];

    for (let i = 0; i < NUM_ASKS; i++) {
        const thought = prompt;
        const operator = `Operator ${i + 1}`;
        const newThought = await generate_thoughts(chatGPT, thought, operator);
        thoughts.push(newThought);
        const score = await evaluate_thoughts(chatGPT, newThought); // Placeholder evaluation, implement your own method
        scores.push(score);
    }

    const bestThought = await search_best_thoughts(scores, thoughts);

    console.log(`Best thought: ${bestThought}`);

    console.log("Script completed successfully!");
};

export default main;
