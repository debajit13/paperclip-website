import Image from "next/image";
import { mobile } from "@/utils/assets";
import AISelling from "./AISelling";

export default function HeroTwo() {
  return (
    <section className="text-center relative bg-gradient-to-b from-white via-[#FFF2F3] to-[#FFD1D6] mt-20 w-screen">
      <div className="flex flex-col items-center pt-10">
        <h1 className="text-2xl md:text-4xl font-semibold text-center font-poppins text-gray-900 leading-[48px] max-w-xl">
          From <span className="font-bold">AI Try-On</span> to{" "}
          <span className="font-bold">AI-enhanced product visuals</span>,
          <span className="text-gray-400">
            {" "}
            showcase items in the best possible way and
          </span>
        </h1>
        <div className="relative mt-8">
          <Image src={mobile} alt="AI-powered phone" width={663} height={829} />
        </div>
      </div>
    </section>
  );
}
