import {Request, Response, text} from 'express';
import { translateWithGemini } from '../gemini';

export const start = (req:Request,res:Response) => {
    console.log("this is Root");
    return
}

export const translate = async (req:Request,res:Response) => {
    const { targetLang, text } = req.body;

    if (!targetLang || !text){
        res.status(400).json({error: `targetLang: ${targetLang}, text: ${text}　は無効な入力です`});
        console.log("error");
        return
    }
    const output = await translateWithGemini(targetLang,text)  
    console.log(output);
    res.status(200).json({message: '変換完了', output});
    return
}