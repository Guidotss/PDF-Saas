import Link from "next/link";
import { GithubIcon, GoogleIcon } from "../ui";

export const RegisterForm = () => {
  return (
    <form className="mt-2">
      <h3 className="text-xl mb-5">Register</h3>
      <div className="flex flex-col gap-2">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          className="border border-gray-400 rounded-md p-3 w-96 outline-none focus:outline-2 focus:outline-primary focus:outline-offset-2 transition-all duration-300 ease-in-out"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="border border-gray-400 rounded-md p-3 w-96 outline-none focus:outline-2 focus:outline-primary focus:outline-offset-2 transition-all duration-300 ease-in-out"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="border border-gray-400 rounded-md p-3 w-96 outline-none focus:outline-2 focus:outline-primary focus:outline-offset-2 transition-all duration-300 ease-in-out"
        />
      </div>
      <button className="bg-primary text-secondary rounded-md p-3 w-96 mt-5 font-semibold text-lg tracking-wide hover:opacity-90 transition-opacity duration-300 ease-in-out">
        Register
      </button>
      <div className="text-end mt-2 text-sm text-zinc-700">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-primary font-semibold">
          Login
        </Link>
      </div>
      <div className="flex flex-col items-center mt-5">
        <span className="text-zinc-500 font-semibold text-lg">or</span>
        <div className="flex flex-col gap-2 mt-2">
          <button className="w-96 flex justify-center items-center bg-zinc-700 bg-opacity-5 py-3 rounded-md gap-x-2 hover:bg-opacity-10 transition-colors duration-300 ease-in-out">
            <GoogleIcon />
            <span className="">Continue with Google</span>
          </button>
          <button className="w-96 flex justify-center items-center bg-zinc-700 bg-opacity-5 py-3 rounded-md gap-x-2 hover:bg-opacity-10 transition-colors duration-300 ease-in-out">
            <GithubIcon />
            <span className="">Continue with Github</span>
          </button>
        </div>
      </div>
    </form>
  );
};
