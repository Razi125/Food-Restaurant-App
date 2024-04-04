import React, { useState } from "react";
import Tabs from "../Tabs/index.tsx";

const Index: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="w-full flex justify-start my-10">
        <div className="w-[70%] md:w-[45%] lg:w-[29%] mx-2 lg:mx-0  relative flex items-center">
          <input
            type="text"
            placeholder="Enter restaurant name..."
            className="w-80 px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl pl-10 text-gray-200"
            value={searchValue}
            style={{ fontWeight: searchValue.length > 0 ? "bold" : "normal" }}
            onChange={handleInputChange}
          />
          <svg
            viewBox="0 0 512 512"
            fill="gray"
            height="1em"
            width="1em"
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          >
            <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
          </svg>
        </div>
      </div>
      <Tabs searchValue={searchValue} />
    </>
  );
};

export default Index;
