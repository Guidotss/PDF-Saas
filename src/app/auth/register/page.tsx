import { File } from "lucide-react";
import { RegisterForm } from "@/components/auth";

export default function RegisterPage() {
  return (
    <main className="h-full flex flex-col items-center py-10 gap-y-10">
      <div className="flex items-center gap-2">
        <File className="text-3xl" />
        <h1 className="text-3xl font-bold">Chat PDF</h1>
      </div>
      <RegisterForm />
    </main>
  );
}
