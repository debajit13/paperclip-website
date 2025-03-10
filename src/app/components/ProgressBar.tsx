export default function ProgressBar({
  currentProgress,
  steps,
  currentSlide,
}: {
  currentProgress: number;
  steps: string[];
  currentSlide: number;
}) {
  return (
    <div className="w-full flex flex-row justify-between space-x-1 md:space-x-2 md:mt-6 p-4 bg-white shadow-md rounded-[16px] border-[1px] border-[#F71D3B33]">
      {steps.map((item, index) => {
        // Special case for the first slide (index 0)
        if (index === 0) {
          // First progress bar is filled when currentProgress is at least 1
          const fillPercentage = currentProgress >= 1 ? 100 : 0;

          return (
            <div className="flex-1 flex flex-col justify-between" key={index}>
              <p className="text-left font-poppins text-[12px] md:text-[14px] leading-[16px] mb-2 hidden md:block">
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
        }

        // For other slides, fill the progress bar when we're at that slide or beyond
        const isActive = currentSlide >= index;
        const fillPercentage = isActive ? 100 : 0;

        return (
          <div className="flex-1 flex flex-col justify-between" key={index}>
            <p className="text-left font-poppins text-[12px] md:text-[14px] leading-[16px] mb-2 hidden md:block">
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
