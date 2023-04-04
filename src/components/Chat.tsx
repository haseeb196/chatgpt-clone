/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, {
  type Dispatch,
  type SetStateAction,
  useContext,
  type ChangeEvent,
  type FormEvent,
} from "react";
import PreText from "./PreText";
import { ThemeContext } from "./ThemeProvider";
import Image from "next/image";
import type { chatType } from "@/pages";

interface props {
  inputvalue: string;
  getinput: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  chat: chatType[];
}
const Chat: React.FC<props> = ({
  inputvalue,
  getinput,
  handleSubmit,
  chat,
}) => {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={`w-full overflow-y-auto sm:min-h-screen md:relative ${
        dark ? "bg-[#343541] text-white" : "bg-white text-black"
      }  flex flex-col items-center ${
        chat.length === 0 ? "justify-center" : "justify-between"
      }  md:ml-[260px]`}
    >
      <div
        className={`w-full  ${
          chat.length === 0 && "flex justify-center sm:py-8"
        }`}
      >
        {chat.length === 0 ? (
          <PreText />
        ) : (
          chat.map((x, i) => (
            <div key={i}>
              <div className="mx-auto flex w-full max-w-[720px] items-center justify-start gap-4 !py-7 px-6">
                <div className="!max-h-[40px] !max-w-[40px]">
                  <Image
                    width={1920}
                    height={1080}
                    alt=""
                    src={
                      "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
                    }
                  />
                </div>
                <p>{x.message}</p>
              </div>

              <div className="w-full gap-4 bg-[#444654]">
                <div className="mx-auto flex max-w-[720px] items-start justify-start gap-4 py-7 px-6">
                  <div className="!max-h-[40px] !max-w-[40px]">
                    <Image
                      alt=""
                      width={1920}
                      height={1080}
                      src={
                        "https://uploads-ssl.webflow.com/621396eaae0610d2e24c450e/63d01548c5b3156b13a40e1f_ChatGPT-Feature-1200x900.png"
                      }
                    />
                  </div>
                  {x.response ? (
                    <div className="flex flex-col gap-6">
                      {x.response.split("```").map((part, index) =>
                        index % 2 !== 0 ? (
                          <div
                            key={index}
                            className="overflow-auto leading-8"
                            style={{
                              display: "block",
                              backgroundColor: "black",
                              color: "white",

                              fontFamily: "Courier New, Courier, monospace",
                              padding: "10px",
                            }}
                          >
                            {part.split("\n").map((x, i) => (
                              <p key={i} className="py-[1px]">
                                {x}
                              </p>
                            ))}
                          </div>
                        ) : (
                          <span key={index}>{part}</span>
                        )
                      )}
                    </div>
                  ) : (
                    <div className="lds-ellipsis">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}{" "}
      </div>
      <form
        onSubmit={handleSubmit}
        className={`${
          chat.length === 0
            ? "!sm:py-5 sm:sticky sm:bottom-[46px] sm:mt-8 md:absolute md:bottom-4"
            : "sticky  sm:bottom-[46px] sm:mt-10 md:bottom-4 md:mt-[3.5px]"
        }   flex  w-full max-w-[780px] items-center py-4 px-4 sm:border-t-[1px]  sm:border-t-gray-500 sm:bg-[#343543]`}
      >
        <input
          value={inputvalue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            getinput(e.target.value)
          }
          type="text"
          className={`shadow-3xl h-[24px] w-full rounded-md bg-[#40414f] py-6 px-3  outline-none ${
            !dark ? "bg-gray-300" : "bg-[#40414f]"
          }`}
        />
        <button className="-ml-9  rounded-md p-1 hover:bg-[#2b2a33]">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 h-4 w-4 text-gray-400"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chat;
