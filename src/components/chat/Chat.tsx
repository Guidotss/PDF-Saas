import { ChatForm } from "./ChatForm";
import { MessagesList } from "./MessagesList";

export const Chat = () => {
  return (
    <div className="flex flex-col shadow-2xl w-full h-screen  px-3">
      <header className="flex items-center justify-center border py-4 rounded-lg bg-zinc-800">
        <h3 className="text-secondary font-semibold">Chat Bot</h3>
      </header>
      <MessagesList/>
      <ChatForm/>
    </div>
  );
};
