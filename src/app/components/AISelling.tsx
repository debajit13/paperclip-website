import Image from "next/image";

export default function AISelling() {
  return (
    <section className="bg-white mt-[-50px] md:mt-[-145px] py-5 md:py-10 px-6 text-center rounded-t-[56px] z-0 w-screen">
      <div className="my-20 max-w-[1280px] mx-auto">
        <h2 className="text-[40px] md:text-[68px] font-bold font-poppins text-gray-800 leading-[48px] md:leading-[72px]">
          Sell <span className="text-red-500 italic">Easy</span> — Shop{" "}
          <span className="text-red-500 italic">Happy!</span>
        </h2>
        <p className="mt-10 text-gray-500 max-w-[90%] text-[#949191] font-poppins text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] mx-auto">
          Keep the vibe fresh and lightly cheeky. Ensure each feature has a
          short description that ties directly to the emotional payoff (time
          saved, no hassle, feeling up-to-date and in control).
        </p>
      </div>
    </section>
  );
}
