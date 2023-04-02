/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { openai } from "@/Openai/OpenaiConfig";
import type { NextApiRequest, NextApiResponse } from "next";
interface data {
  text: string;
  model: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { model, text }: data = req.body;
  if (text === "") return;
  if (req.method !== "POST") return;

  try {
    const response = await openai.createCompletion({
      model: model,
      prompt: text,
    });
    res.json({ chatresponse: response?.data?.choices[0]?.text });
  } catch (error) {
    console.log(error);
  }
}
