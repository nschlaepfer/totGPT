import { ChatGPTAPI } from "chatgpt";

export class ChatGPT {
    constructor(apiKey, model) {
        this.apiKey = apiKey;
        this.api = new ChatGPTAPI({
            apiKey: this.apiKey,
            completionParams: {
                model: model,
                temperature: 1
            },
        });
    }

    async sendMessage(message) {
        const response = await this.api.sendMessage(message);
        return response.text;
    }
}
