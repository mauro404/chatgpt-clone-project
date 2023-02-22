'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center  text-center bg-[#11A37F]">
        <button
            onClick={() => signIn('google')}
            className="text-white font-bold text-3xl animate-pulse"
        >
            <Image
                src="/chatgpt_logo.png"
                width={500}
                height={500}
                alt="logo"
            />
            Sing In To Use ChatGpt
        </button>
    </div>
  );
}

export default Login;
