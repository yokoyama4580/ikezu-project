import {Request, Response} from 'express';
import { translateWithGemini } from '../gemini';

export const start = (req:Request,res:Response) => {
    console.log("this is Root")
    return
}

export const translate = async (req:Request,res:Response) => {
    const {language,input_text} = req.body;

    if (!language || !input_text){
        res.status(400).json({error: `language: ${language}, input_text: ${input_text}　は無効な入力です`});
        console.log("error")
        return
    }
    const output = await translateWithGemini(language,input_text)  
    console.log(output)
    res.status(200).json({message: '変換完了', output})
    return
}