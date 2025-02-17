export default function ProgressBar({
  currentSlide,
}: {
  currentSlide: number;
}) {
  const steps = [
    "AI Listing",
    "Zero Seller Fees",
    "AI Seller Tools",
    "Effortless Shipping",
    "AI Negotiations",
  ];

  const clicksPerProgress = 3; // 3 clicks per progress bar fill
  const clicksPerCarouselMove = 4; // 4th click moves the carousel
  const totalClicks = steps.length * clicksPerCarouselMove; // 20 total clicks

  return (
    <div className="w-full flex space-x-2 mt-6 p-4 bg-white shadow-md rounded-[16px] border-[1px] border-[#F71D3B33]">
      {steps.map((item, index) => {
        const minClick = index * clicksPerCarouselMove;
        const maxClick = (index + 1) * clicksPerCarouselMove - 1;

        // Determine fill percentage only if the progress step is reached
        const isActive = currentSlide >= minClick;
        const fillPercentage = isActive
          ? Math.min(((currentSlide - minClick) / clicksPerProgress) * 100, 100)
          : 0; // Ensure future steps remain empty until reached

        return (
          <div className="flex-1" key={index}>
            <p className="text-left font-poppins text-[14px] leading-[16px] mb-2">
              {item}
            </p>
            <div className="w-full h-2 bg-[#94919129] rounded-lg overflow-hidden">
              <div
                className="h-full bg-[#F71D3B] transition-all duration-500"
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
