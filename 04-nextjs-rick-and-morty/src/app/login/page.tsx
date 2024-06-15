import { loginAction } from "@/authActions";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex h-[80dvh] w-full flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold text-white">
        Welcome to Rick and Morty Wiki
      </h1>
      <form
        action={loginAction}
        className="flex w-full flex-col space-y-4 md:w-1/4"
      >
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="border border-gray-300 p-2 focus-within:outline-green-300"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-gray-300 p-2 focus-within:outline-green-300"
        />
        <button
          type="submit"
          className="rounded bg-green-500 p-2 text-white hover:bg-green-700"
        >
          Login
        </button>
        <Link
          href="/register"
          className="text-white hover:text-green-500 hover:underline"
        >
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
