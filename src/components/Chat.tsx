import React, { useContext } from "react";
import PreText from "./PreText";
import { ThemeContext } from "./ThemeProvider";

const Chat: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full ${
        dark ? "bg-[#343541] text-white" : "bg-white text-black"
      }  flex flex-col items-center justify-center md:ml-[260px]`}
    >
      <PreText />
    </div>
  );
};

export default Chat;
