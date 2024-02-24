"use client";

import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MainSwiper = () => {
  return (
    <div className="absolute -z-[1] aspect-[400/594] w-full overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay]}
        className="relative m-0 block h-full w-full"
        autoplay={{ delay: 2000 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        loop
      >
        <SwiperSlide>
          <Image
            className="relative float-left block"
            alt="slider-001"
            src="images/slider/slider_001.jpg"
            fill
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="relative float-left block"
            alt="slider-002"
            src="images/slider/slider_002.jpg"
            fill
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="relative float-left block"
            alt="slider-003"
            src="images/slider/slider_003.jpg"
            fill
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSwiper;
