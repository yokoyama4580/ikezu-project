import express, { Request, Response } from "express";
import dotenv from "dotenv";
import app from './app';

// アプリケーションで動作するようにdotenvを設定する
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // エラーの処理
  throw new Error(error.message);
});