"use client"

import { useMessageStore } from "@/store"

export const MessagesList = () => {
    const { messages } = useMessageStore(); 
  return (
    <div className="h-full flex flex-col gap-y-2 overflow-y-auto mt-3">
      {messages.map((message) => (
        <div
          key={message.id}
          className="flex flex-col px-3 py-1 bg-zinc-200 rounded-lg min-w-28 self-end"
        >
          <p className="text-black">{message.text}</p>
          <span className="text-zinc-400 text-[10px] text-end">
            {new Date().toLocaleTimeString()}
          </span>
        </div>
      ))}
    </div>
  )
}