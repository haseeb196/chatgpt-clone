/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { openai } from "@/Openai/OpenaiConfig";
import type { NextApiRequest, NextApiResponse } from "next";
interface data {
  text: string;
  model: string;
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { model, text }: data = req.body;
  if (text === "") return;
  if (req.method !== "POST") return;

  const response = openai
    .createCompletion({
      model: model,
      prompt: text,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0]?.text)
    .catch((e) => console.log(e));
  res.json({ message: response });
}
