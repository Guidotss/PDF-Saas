import { File, Ghost,  } from "lucide-react";
import { PdfViewer, UploadInput } from "@/components/file";

export default function HomePage() {
  return (
    <main>
      <header className="flex items-center justify-between p-4 shadow-md">
        <div className="flex items-center">
          <File className="text-black" />
          <h1 className="text-xl font-bold">Chat PDF</h1>
        </div>
        <div className="flex items-center gap-x-6">
          <h4 className="text-sm font-semibold">Dashboard</h4>
          <div className="w-10 h-10 rounded-full bg-zinc-700" />
        </div>
      </header>
      <PdfViewer/>
    </main>
  );
}
