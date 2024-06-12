"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const handleSignout = async () => {
    await signOut();
  };
  return (
    <button
      onClick={handleSignout}
      className="hidden cursor-pointer text-lg font-bold text-white hover:text-red-600 hover:underline md:block"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
