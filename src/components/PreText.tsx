import {
  ElectricBoltOutlined,
  LightModeOutlined,
  ReportProblemOutlined,
} from "@mui/icons-material";
import React from "react";

const PreText = () => {
  return (
    <div className="flex flex-col gap-10 px-6 md:-mt-32">
      <div>
        <h1 className="text-center text-[36px] font-semibold">ChatGPT</h1>
      </div>
      <div className="flex gap-4 sm:flex-col sm:gap-y-8">
        <div className="flex flex-col gap-5 text-center">
          <div className="text-[20px]">
            <LightModeOutlined className="!h-8 !w-8" />
            <h1 className="mt-3">Examples</h1>
          </div>
          <div className="flex flex-col gap-3 text-sm sm:items-center">
            <p className="w-full rounded-md bg-[hsla(0,0%,100%,.05)]  p-[.75rem] sm:max-w-[490px] md:max-w-[220px]">
              &#39;Explain quantum computing in simple terms&#39;-&gt;
            </p>
            <p className="w-full rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem] sm:max-w-[490px] md:max-w-[220px]">
              &#39;Got any creative ideas for a 10 year old’s
              birthday?&#39;-&gt;
            </p>
            <p className="w-full rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem] sm:max-w-[490px] md:max-w-[220px]">
              &#39;How do I make an HTTP request in Javascript?&#39;-&gt;
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <div className="text-[20px]">
            <ElectricBoltOutlined className="!h-8 !w-8" />
            <h1 className="mt-3">Capabilities</h1>
          </div>
          <div className="flex flex-col gap-3 text-sm sm:items-center">
            <p className="w-full rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem] sm:max-w-[490px] md:max-w-[220px]">
              Remembers what user said earlier in the conversation
            </p>
            <p className="w-full rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem] sm:max-w-[490px] md:max-w-[220px]">
              Allows user to provide follow-up corrections
            </p>
            <p className="w-full rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem] sm:max-w-[490px] md:max-w-[220px]">
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <div className="text-[20px]">
            <ReportProblemOutlined className="!h-8 !w-8" />
            <h1 className="mt-3">Limitations</h1>
          </div>
          <div className="flex flex-col gap-3 text-sm sm:items-center">
            <p className="w-full rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem] sm:max-w-[490px] md:max-w-[220px]">
              May occasionally generate incorrect information
            </p>
            <p className="w-full rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem] sm:max-w-[490px] md:max-w-[220px]">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="w-full rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem] sm:max-w-[490px] md:max-w-[220px]">
              Limited knowledge of world and events after 2021
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default PreText;
