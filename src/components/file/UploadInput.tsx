"use client";
import { PlusCircle } from "lucide-react";
import { useFileStore } from "@/store";

export const UploadInput = () => {
  const { setFile } = useFileStore();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <>
      <input
        type="file"
        className="hidden"
        id="file-upload"
        accept="application/pdf"
        onChange={handleFile}
      />
      <label
        htmlFor="file-upload"
        className="bg-zinc-500 flex items-center justify-center gap-x-2 mt-4 cursor-pointer rounded-lg bg-opacity-20 p-2 hover:bg-opacity-30 transition-all duration-300 ease-in-out"
      >
        <PlusCircle className="text-black" />
        <span className="text-black">Upload a file</span>
      </label>
    </>
  );
};
