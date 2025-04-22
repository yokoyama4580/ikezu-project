import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.API_KEY;
if (!apiKey) {
    throw new Error("API_KEY is not defined in env");
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function translateWithGemini(Language: string, input_text: string): Promise<string> {
    const model: GenerativeModel = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

    const prompt = `次の文章を${Language}に変換し,変換後の文章のみを出力してください．
                    文章: ${input_text}`

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().replace(/[\n]+/g, "");

    return text
}

