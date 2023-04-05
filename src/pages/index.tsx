/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import Chat from "@/components/Chat";
import { ThemeProvider } from "@/components/ThemeProvider";

import Sidebar from "@/components/Sidebar";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { type FormEvent, useEffect, useState } from "react";
export type chatType = {
  message: string | null;
  response: string | null;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home: NextPage = ({ datas }: any) => {
  const [chat, setChat] = useState<chatType[]>([]);
  const [input, setInput] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("gpt-3.5-turbo");
  const [models, setModels] = useState<any[] | null>(null);
  useEffect(() => {
    const ids = datas?.data?.map((x: { id: string }) => x.id);
    setModels(ids);
  }, [datas?.data]);
  const SubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") return;
    setChat((prevState) => [...prevState, { message: input, response: null }]);

    setInput("");
    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: selectedModel, text: input }),
    };
    const res: Response = await fetch("/api/Ask", requestOptions);
    const data = await res.json();
    setChat((prevState) => {
      const updatedChat = [...prevState];
      const lastChatItem = updatedChat.pop();
      if (lastChatItem) {
        updatedChat.push({
          message: lastChatItem.message,
          response: data.message,
        });
      }
      return updatedChat;
    });
  };

  return (
    <>
      <Head>
        <title>ChatGPT-clone</title>
        <meta name="description" content="ChatGPT-clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-full sm:flex-col sm:overflow-y-hidden md:relative md:flex-row">
        <ThemeProvider>
          <Sidebar
            data={models}
            models={selectedModel}
            selected={setSelectedModel}
            reset={setChat}
          />
          <Chat
            inputvalue={input}
            getinput={setInput}
            handleSubmit={SubmitForm}
            chat={chat}
          />
        </ThemeProvider>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `https://api.openai.com/v1/models`,

    {
      method: "GET",
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const datas = await res.json();
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    props: { datas }, // will be passed to the page component as props
  };
};
