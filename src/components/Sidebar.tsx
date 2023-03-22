import { Add } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="relative flex h-screen flex-col bg-[#202123] p-2 !text-white shadow-2xl md:fixed md:w-[260px] md:max-w-[260px]">
      <div>
        <button className="border-gray flex w-full flex-row items-center gap-2 rounded-md border-[1px] border-white/20 py-3 pl-2 text-[14px] transition-colors duration-[200] hover:bg-gray-500/10">
          <Add className="text-[16px]" />
          <p>New chat</p>
        </button>
        <div className="mt-6">
          <FormControl fullWidth size="small">
            <InputLabel id="model" className="!text-white">
              Model
            </InputLabel>
            <Select
              label="Model"
              id="model"
              className="!text-white"
              sx={{
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "gray",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "gray",
                  borderWidth: "thin",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "gray",
                  borderWidth: "thin",
                },
                '.MuiSvgIcon-root ': {
                  fill: "white !important",
                }
              }}
            >
              <MenuItem value="dgsgsdg">fgagf</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
