import { RegisterForm } from "@/app/register/(ui)/form";
import { RegisterNavbar } from "@/app/register/(ui)/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro - Project S",
  description: "",
};

export default function Register() {
  return (
    <>
      <RegisterNavbar />
      <div className="flex min-h-screen justify-center">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
        </div>
        <RegisterForm />
      </div>
    </>
  );
}
