import { Configuration } from "openai";
import { OpenAIApi } from "openai/dist/api";

const Config = new Configuration({
   apiKey: process.env.OPENAI_API_KEY,
}); 

export const openai = new OpenAIApi(Config);
