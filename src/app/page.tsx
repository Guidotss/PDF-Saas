import { Navbar } from "@/components/navbar";
import { Chip } from "@/components/ui";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="h-screen grainy flex flex-col items-center justify-center gap-y-3">
        <Chip label="Chat PDf is now available!" color="white" text="black" />
        <div className="flex text-7xl font-bold w-3/4 text-center">
          <h1 className="mt-2">
            Chat with your <span className="text-purple-600">documents </span>
            when you want
          </h1>
        </div>
        <span className="text-center w-1/2 mt-5 text-zinc-500 text-lg">
          <strong className="text-primary">Chat PDF {' '}</strong>
          allows you to have conversations with any PDF document. Simply
          upload your file and start asking questions right away.
        </span>
      </section>
    </main>
  );
}
