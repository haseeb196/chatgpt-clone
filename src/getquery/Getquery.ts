/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
interface data {
  text: string;
  model: string;
}

export const GetQuery = async ({ model, text }: data) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };
  const datag = {
    model: model,
    messages: [{ role: "user", content: text }],
    temperature: 0.7,
  };
  const url = "https://api.openai.com/v1/chat/completions";
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(datag),
  };
  const res = await fetch(url, options);
  const data = await res.json();
  return data.choices[0].message.content;
};
