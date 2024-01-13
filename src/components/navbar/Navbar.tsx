import { ArrowRight, File } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="sticky shadow-sm">
      <nav className="flex items-center justify-between px-10 py-5">
        <div className="flex items-center gap-2">
          <File />
          <h1 className="text-2xl font-bold">Chat PDF</h1>
        </div>

        <ul className="flex items-center gap-10 text-sm font-semibold">
          <Link href="/auth/login">
            <span className="hover:text-orange-500 transition-colors duration-300 ease-in-out">Sign in</span>
          </Link>
          <Link
            href="/auth/register"
            className="flex items-center bg-primary rounded-full px-3 py-1 text-white hover:opacity-80 transition-opacity duration-300 ease-in-out"
          >
            <span>Get Started</span>
            <ArrowRight className="ml-2" />
          </Link>
        </ul>
      </nav>
      <div className="h-[1px] w-full bg-zinc-200" />
    </header>
  );
};
