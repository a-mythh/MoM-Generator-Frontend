import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

// components
import Header from "./Header.jsx";
import Loader from "./Loader.jsx";

function UploadPage({ setJsonData }) {
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/process-audio", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setJsonData(result);
      navigate("/download");
    } catch (error) {
      console.error("Error uploading file:", error);
      setIsLoading(false);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="h-lvh flex flex-col items-center justify-between bg-gradient-to-br from-gray-700 via-gray-900 to-black">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mb-36">
          <input
            type="file"
            accept="audio/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={triggerFileSelect}
            className="px-8 py-4 text-xl font-rubik font-medium rounded-full text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 text-center me-2 mb-2"
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
}

export default UploadPage;
