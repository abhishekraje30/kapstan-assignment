"use client";
import { SetStateAction, useState } from "react";

export default function FileUpload() {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Handle the file upload logic here
      console.log(file);
    }
  };

  return (
    <div className="p-4">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed p-4 text-center ${
          dragging ? "border-blue-500" : "border-gray-300"
        }`}
      >
        <p className="mb-2">Drag & Drop your file here</p>
        <p className="mb-2">or</p>
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer inline-block bg-blue-500 text-white px-4 py-2 rounded"
        >
          Browse Files
        </label>
      </div>
      {file && (
        <div className="mt-4">
          <p>Selected file: {file.name}</p>
          <button
            onClick={handleUpload}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
}
