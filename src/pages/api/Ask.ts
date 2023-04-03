/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { GetQuery } from "@/getquery/Getquery";
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
  const data = await GetQuery({ model, text });

  res.json({ message: data });
}
