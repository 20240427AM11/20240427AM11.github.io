import Calendar from "@/components/calendar_";
import { Contact, ContactWrapper } from "@/components/contact_";
import Gallery from "@/components/gallery";
import Map from "@/components/map";
import Section from "@/components/section_";
import localFont from "next/font/local";
import Image from "next/image";

const seoulFont = localFont({
  src: "../../public/fonts/SeoulHangangJungL.woff2",
});

export default function Home() {
  return (
    <main className={seoulFont.className}>
      <div className="w-full md:w-[375px]">
        <div className="relative aspect-[400/594] min-h-[557px] leading-[0]">
          <div
            id="scene_slider"
            className="absolute -z-[1] h-[594px] w-full overflow-hidden"
          >
            <div
              id="sliderContainer"
              className="relative m-0 block h-full w-full"
            >
              <Image
                className="relative float-left block"
                alt="slider-001"
                src="images/slider/slider_001.jpg"
                fill
              />
            </div>
          </div>
          <Image
            className="w-full"
            alt="skin"
            src="images/skin/skin.png"
            fill
          />
          <Image
            className="absolute left-0 top-0 z-[2] w-full"
            alt="skin_info"
            src="images/skin/skin_info.png"
            fill
          />
        </div>
        <Section title="초대합니다.">
          <div className="mb-[30px] text-center text-sm leading-6 text-[#534741]">
            <p>열 번의 사계를 지나, 새로이 준비한 오늘</p>
            <br />
            <p>이제 손을 맞잡고 나란히 걸어온</p>
            <p>지난 10년 여정에 쉼표를 그리며,</p>
            <p>나와 너에서 우리로 시작을 잇고자 합니다.</p>
            <p>배가 될 행복의 마침표로 향한 새 출발의</p>
            <p>준엄한 걸음을 여러분과 함께 내딛고 싶습니다.</p>
            <p>오롯이 귀한 발길을 보태어 자리를 빛내주세요.</p>
          </div>
          <div className="mx-auto mb-5 flex flex-row items-stretch justify-center text-sm text-[#534741]">
            <div className="flex flex-col gap-y-2.5 pr-[5px] text-right">
              <div>
                <div>배승환</div>
                <div>김형자</div>
              </div>
              <div>
                <div>이성민</div>
                <div>이솜</div>
              </div>
            </div>
            <div className="flex flex-col justify-around gap-y-2.5 px-[5px]">
              <div>의</div>
              <div>의</div>
            </div>
            <div className="flex flex-col justify-around gap-y-2.5 px-[5px] text-center">
              <div>장남</div>
              <div>장녀</div>
            </div>
            <div className="flex flex-col justify-around gap-y-2.5 font-bold">
              <div>배준오</div>
              <div>이지나</div>
            </div>
          </div>
        </Section>
        <Section title="축하 연락처" odd>
          <ContactWrapper>
            <Contact name="배준오" number="01062635217" />
            <Contact name="배승환" number="01027269100" />
            <Contact name="김형자" number="01066472111" />
          </ContactWrapper>
          <ContactWrapper>
            <Contact name="이지나" number="01048036799" />
            <Contact name="이성민" number="01049508866" />
            <Contact name="이솜" number="01087596799" />
          </ContactWrapper>
        </Section>
        <Section bg clean>
          <Calendar year={2024} month={4} day={27} />
        </Section>
        <Section title="갤러리" odd>
          <Gallery />
        </Section>
        <Section title="오시는 길">
          <Map />
        </Section>
      </div>

      {/* <div className="w-full h-32 bg-[#fffaee]"></div> */}
    </main>
  );
}
