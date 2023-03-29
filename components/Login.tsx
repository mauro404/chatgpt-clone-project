"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center  text-center bg-[#11A37F] ">
      <Image
        src="/chatgpt_logo.png"
        width={500}
        height={500}
        alt="logo"
        className="animate-pulse"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-semibold md:font-bold text-xl md:text-3xl "
      >
        <p className="border border-white rounded-lg p-4 md:p-8">
          Click Here to Sing In
        </p>
      </button>
    </div>
  );
}

export default Login;
