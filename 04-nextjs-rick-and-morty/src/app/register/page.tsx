import { registerAction } from "@/authActions";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex h-[80dvh] w-full flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold text-white">
        Register to save your favorite characters!
      </h1>
      <form action={registerAction} className="flex w-1/4 flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 p-2 focus-within:outline-green-300"
          required
          name="name"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray-300 p-2 focus-within:outline-green-300"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-gray-300 p-2 focus-within:outline-green-300"
          required
        />
        <button
          className="rounded bg-green-500 p-2 text-white hover:bg-green-700"
          type="submit"
        >
          Register
        </button>
        <Link
          href="/login"
          className="text-white hover:text-green-500 hover:underline"
        >
          Log in
        </Link>
      </form>
    </div>
  );
};

export default Register;
