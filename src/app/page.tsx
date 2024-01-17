import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[375px]">
        <div id="scene_wrapper" className="leading-[0] relative min-h-[557px]">
          <div
            id="scene_slider"
            className="absolute w-full h-[557px] -z-[1] overflow-hidden"
          >
            <Image
              className="w-full h-full object-cover"
              alt="slider-001"
              src="images/slider/slider_001.jpg"
              fill
            />
          </div>
          <Image
            id="skin_png"
            className="w-full h-full object-cover"
            alt="skin"
            src="images/skin/skin.png"
            fill
          />
          <Image
            id="skin_info"
            className="absolute top-0 left-0 w-full h-full object-cover z-[2]"
            alt="skin_info"
            src="images/skin/skin_info.png"
            fill
          />
        </div>
      </div>
    </main>
  );
}
