export async function evaluate_thoughts(chatGPT, newThought) {
    const evaluation = await chatGPT.sendMessage(`Evaluate the following thought: ${newThought}`);
    return evaluation;
};
