import React from "react";

// components
import Header from "./Header.jsx";

function DownloadPage({ jsonData }) {
  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(jsonData)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "transcript.json";
    link.click();
  };

  return (
    <div className="h-lvh flex flex-col items-center justify-center bg-black">
      <Header />
      <button
            onClick={downloadJSON}
            className="px-8 py-4 text-xl font-medium font-rubik rounded-full text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 text-center me-2 mb-2"
          >
            Download
          </button>
    </div>
  );
}

export default DownloadPage;
