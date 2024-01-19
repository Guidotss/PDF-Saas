"use client";
import { Message } from "@/interfaces";
import { useMessageStore } from "@/store";
import { Send } from "lucide-react";
import { useState } from "react";

export const ChatForm = () => {
  const { addMessage } = useMessageStore();
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text || text.trim() === "") return;

    const message: Message = {
      id: crypto.randomUUID(),
      text,
    };
    addMessage(message);
    setText("");
  };
  return (
    <>
      <form
        className="flex items-end justify-end h-20 mb-5 gap-x-2"
        onSubmit={handleSubmit}
      >
        <input
          className="w-[40vw] bg-zinc-200 py-2 px-5 rounded-l-lg focus:outline-none"
          placeholder="Type a message"
          name="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
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
