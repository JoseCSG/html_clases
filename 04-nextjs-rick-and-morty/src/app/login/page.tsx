import { loginAction } from "@/authActions";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex h-[80dvh] w-full flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Login</h1>
      <form action={loginAction} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="border border-gray-300 p-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-gray-300 p-2"
        />
        <button type="submit" className="rounded bg-blue-500 p-2 text-white">
          Login
        </button>
        <Link href="/register" className="text-white">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
