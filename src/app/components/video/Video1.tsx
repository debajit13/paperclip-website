import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function VideoPlayer({
  width,
  height,
  customStyle,
}: {
  width: number;
  height: number;
  customStyle?: string;
}) {
  return (
    <div className={`${customStyle} mx-auto`}>
      <ReactPlayer
        url="/videos/output_transparent.webm"
        playing
        loop
        muted
        playsInline
        controls
        width={width}
        height={height}
      />
    </div>
  );
}
