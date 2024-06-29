import React from "react";

export default function loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <h1 className="text-white text-2xl">CONNECTING...</h1>
      <img src="spinner.svg" alt="loading..." />
    </div>
  );
}
