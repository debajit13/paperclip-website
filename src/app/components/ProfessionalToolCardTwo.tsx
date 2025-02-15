export default function ProfessionalToolCardTwo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full bg-gradient-to-b from-gray-300 to-white rounded-2xl border border-white/40 shadow-[0px_10px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl p-6">
      {/* Title */}
      <h3 className="font-bold font-poppins text-[28px] leading-[40px] text-gray-900 mt-60">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-gray-500 font-poppins text-[20px] leading-[28px]">
        {description}
      </p>
    </div>
  );
}
