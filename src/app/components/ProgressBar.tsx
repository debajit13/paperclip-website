export default function ProgressBar({
  currentSlide,
}: {
  currentSlide: number;
}) {
  const totalSlides = 25;
  const slidesPerProgress = 5;

  const steps = [
    "AI Listing",
    "Zero Seller Fees",
    "AI Seller Tools",
    "Effortless Shipping",
    "AI Negotiations",
  ];

  return (
    <div className="w-full flex space-x-2 mt-6">
      {steps.map((item, index) => {
        // Determine fill percentage for each progress segment
        const minSlide = index * slidesPerProgress;
        const maxSlide = (index + 1) * slidesPerProgress;
        const fillPercentage = Math.min(
          Math.max(((currentSlide - minSlide) / slidesPerProgress) * 100, 0),
          100
        );

        return (
          <div className="flex-1" key={index}>
            <p className="text-left font-poppins text-[14px] leading-[16px] mb-2">
              {item}
            </p>
            <div className="w-full h-2 bg-gray-300 rounded-lg overflow-hidden">
              <div
                className="h-full bg-red-500 transition-all duration-500"
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
