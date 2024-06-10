import { registerAction } from "@/authActions";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex h-[80dvh] w-full flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Register</h1>
      <form action={registerAction} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 p-2"
          required
          name="name"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray-300 p-2"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-gray-300 p-2"
          required
        />
        <button className="rounded bg-blue-500 p-2 text-white" type="submit">
          Register
        </button>
        <Link href="/login" className="text-white">
          Log in
        </Link>
      </form>
    </div>
  );
};

export default Register;
