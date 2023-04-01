/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextApiRequest, NextApiResponse } from "next";
interface data {
  text: string;
  model: string;
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { model, text }: data = req.body;
  res.json({ mgds: model, gdsag: text });
}
