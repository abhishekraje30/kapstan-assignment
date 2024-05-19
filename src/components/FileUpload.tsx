"use client";
import { SetStateAction, useState } from "react";

export default function FileUpload({
  setEnvVariables,
  handleCancel,
}: {
  setEnvVariables: SetStateAction<any>;
  handleCancel: () => void;
}) {
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
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      parseEnvFile(droppedFile);
      handleCancel();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      parseEnvFile(selectedFile);
      handleCancel();
    }
  };

  const parseEnvFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const text = e.target?.result as string;
      const env = parseEnvString(text);
      setEnvVariables(env);
    };
    reader.readAsText(file);
  };

  const parseEnvString = (str: string): Record<string, string> => {
    const env: Record<string, string> = {};
    const lines = str.split("\n");
    lines.forEach((line) => {
      const match = line.match(/^([^#=]+)=([^#]*)$/);
      if (match) {
        env[match[1].trim()] = match[2].trim();
      }
    });
    return env;
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
          accept=".env"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer inline-block bg-[#5820ab] text-white px-4 py-2 rounded"
        >
          Browse Files
        </label>
      </div>
    </div>
  );
}
