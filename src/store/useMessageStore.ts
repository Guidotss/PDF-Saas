import { Message } from "@/interfaces";
import { create } from "zustand";

interface MessageStore {
  messages: Message[];
  addMessage: (message: Message) => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));
