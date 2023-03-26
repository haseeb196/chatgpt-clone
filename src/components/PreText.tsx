import {
  ElectricBoltOutlined,
  LightModeOutlined,
  ReportProblemOutlined,
} from "@mui/icons-material";
import React from "react";

const PreText = () => {
  return (
    <div>
      <div>
        <h1 className="text-[40px] font-semibold">ChatGPT</h1>
      </div>
      <div>
        <div>
          <div>
            <LightModeOutlined />
            <h1>Examples</h1>
          </div>
          <p>&#39;Explain quantum computing in simple terms&#39;-&gt;</p>
          <p>
            &#39;Got any creative ideas for a 10 year old’s birthday?&#39;-&gt;
          </p>
          <p>&#39;How do I make an HTTP request in Javascript?&#39;-&gt;</p>
        </div>
        <div>
          <div>
            <ElectricBoltOutlined />
            <h1>Capabilities</h1>
          </div>
          <p>Remembers what user said earlier in the conversation</p>
          <p>Allows user to provide follow-up corrections</p>
          <p>Trained to decline inappropriate requests</p>
        </div>
        <div>
          <div>
            <ReportProblemOutlined />
            <h1>Limitations</h1>
          </div>
          <p>May occasionally generate incorrect information</p>
          <p>May occasionally produce harmful instructions or biased content</p>
          <p>Limited knowledge of world and events after 2021</p>
        </div>
      </div>
    </div>
  );
};

export default PreText;
