import React, {
  type Dispatch,
  type SetStateAction,
  useContext,
  type ChangeEvent,
  type FormEvent,
} from "react";
import PreText from "./PreText";
import { ThemeContext } from "./ThemeProvider";
interface props {
  inputvalue: string;
  getinput: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
const Chat: React.FC<props> = ({ inputvalue, getinput, handleSubmit }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full md:relative ${
        dark ? "bg-[#343541] text-white" : "bg-white text-black"
      }  flex flex-col items-center justify-center md:ml-[260px]`}
    >
      <div className="sm:w-full sm:overflow-y-scroll sm:py-8">
        <PreText />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[780px] items-center sm:sticky sm:bottom-0 sm:mt-[45px] sm:border-t-[1px] sm:border-t-gray-500 sm:py-4 sm:px-4 md:absolute md:bottom-10 md:!px-4"
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
