export async function search_best_thoughts(score, thoughts) {
    const maxScoreIndex = score.indexOf(Math.max(...score));
    const bestThought = thoughts[maxScoreIndex];
    return bestThought;
};
