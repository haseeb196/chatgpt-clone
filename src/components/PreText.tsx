import {
  ElectricBoltOutlined,
  LightModeOutlined,
  ReportProblemOutlined,
} from "@mui/icons-material";
import React from "react";

const PreText = () => {
  return (
    <div className="flex flex-col px-6">
      <div>
        <h1 className="-mt-28 text-center text-[36px] font-semibold">
          ChatGPT
        </h1>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-5 text-center">
          <div className="text-[20px]">
            <LightModeOutlined className="!h-8 !w-8" />
            <h1 className="mt-3">Examples</h1>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="max-w-[250px] rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem]">
              &#39;Explain quantum computing in simple terms&#39;-&gt;
            </p>
            <p className="max-w-[250px] rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem]">
              &#39;Got any creative ideas for a 10 year old’s
              birthday?&#39;-&gt;
            </p>
            <p className="max-w-[250px] rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem]">
              &#39;How do I make an HTTP request in Javascript?&#39;-&gt;
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <div className="text-[20px]">
            <ElectricBoltOutlined className="!h-8 !w-8" />
            <h1 className="mt-3">Capabilities</h1>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="max-w-[250px] rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem]">
              Remembers what user said earlier in the conversation
            </p>
            <p className="max-w-[250px] rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem]">
              Allows user to provide follow-up corrections
            </p>
            <p className="max-w-[250px] rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem]">
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <div className="text-[20px]">
            <ReportProblemOutlined className="!h-8 !w-8" />
            <h1 className="mt-3">Limitations</h1>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="max-w-[250px] rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem]">
              May occasionally generate incorrect information
            </p>
            <p className="max-w-[250px] rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem]">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="max-w-[250px] rounded-md bg-[hsla(0,0%,100%,.05)] p-[.75rem]">
              Limited knowledge of world and events after 2021
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default PreText;
