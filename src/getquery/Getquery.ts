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
  if (model.includes("gpt")) {
    const data1 = {
      model: model,
      messages: [{ role: "user", content: text }],
      temperature: 0.7,
    };
    const url = "https://api.openai.com/v1/chat/completions";
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data1),
    };
    const res = await fetch(url, options);
    const datas = await res.json();

    const message = await datas.choices[0].message.content;

    return message;
  } else {
    const datag = {
      model: model,
      prompt: text,
      temperature: 0.7,
    };
    const url = "https://api.openai.com/v1/completions";
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(datag),
    };
    const res = await fetch(url, options);
    const datas = await res.json();

    const message = await datas.choices[0].text;
    return message;
  }
};
