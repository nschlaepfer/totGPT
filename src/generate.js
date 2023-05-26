export async function generate_thoughts(chatGPT, thought, operator) {
    const newThought = await chatGPT.sendMessage(`${thought} ${operator}`);
    return newThought;
};
