export default function ProgressBar({
  currentSlide,
  steps,
}: {
  currentSlide: number;
  steps: string[];
}) {
  const clicksPerProgress = 3; // 3 clicks per progress bar fill
  const clicksPerCarouselMove = 4; // 4th click moves the carousel
  const totalClicks = steps.length * clicksPerCarouselMove; // 20 total clicks

  return (
    <div className="w-full flex flex-row justify-between space-x-1 md:space-x-2 md:mt-6 xl:mt-0 p-4 bg-white shadow-md rounded-[16px] border-[1px] border-[#F71D3B33]">
      {steps.map((item, index) => {
        const minClick = index * clicksPerCarouselMove;
        const maxClick = (index + 1) * clicksPerCarouselMove - 1;

        // Determine fill percentage only if the progress step is reached
        const isActive = currentSlide >= minClick;
        const fillPercentage = isActive
          ? Math.min(((currentSlide - minClick) / clicksPerProgress) * 100, 100)
          : 0; // Ensure future steps remain empty until reached

        return (
          <div className="flex-1 flex flex-col justify-between" key={index}>
            <p className="text-left font-poppins text-[12px] md:text-[14px] leading-[16px] mb-2 hidden md:block">
              {item}
            </p>
            <div className="w-full h-[4px] bg-[#94919129] rounded-lg overflow-hidden">
              <div
                className="h-full transition-all duration-500"
                style={{
                  width: `${fillPercentage}%`,
                  background:
                    "linear-gradient(90deg, #F71D3B 0%, #FFA4B0 100%)",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
