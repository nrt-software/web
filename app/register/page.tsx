"use client";

import { RegisterForm } from "@/app/register/(ui)/form";
import { Navbar } from "@/components/navbar";
import { useRouter } from "next/navigation";

export default function Register() {
  const route = useRouter();

  return (
    <div className="flex min-h-screen justify-center items-center">
      <RegisterForm />
    </div>
  );
}
