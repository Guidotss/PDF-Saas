"use client";
import { Send } from "lucide-react";

export const ChatForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
        <form className="flex items-end justify-end h-full mb-5" onSubmit={handleSubmit}>
        <input
            className="w-[40vw] bg-zinc-200 py-2 px-5 rounded-l-lg focus:outline-none"
            placeholder="Type a message"
        />
        <button
            className="bg-zinc-700 px-5 py-2 rounded-r-lg text-white"
            type="submit"
        >
            <Send size={24} />
        </button>
        </form>
    </>
  );
};
