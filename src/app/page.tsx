import Image from "next/image";
import localFont from "next/font/local";
import Section from "@/components/Section";
import Contact from "@/components/Contact";
import Calendar from "@/components/Calendar";

const seoulFont = localFont({
  src: "../../public/fonts/SeoulHangangJungL.woff2",
});

export default function Home() {
  return (
    <main className={seoulFont.className}>
      <div className="w-full md:w-[375px]">
        <div className="leading-[0] relative aspect-[2/3]">
          <div
            id="scene_slider"
            className="absolute w-full aspect-[2/3] -z-[1] overflow-hidden"
          >
            <Image
              className="w-full h-full object-cover"
              alt="slider-001"
              src="images/slider/slider_001.jpg"
              fill
            />
          </div>
          <Image
            className="w-full h-full object-cover"
            alt="skin"
            src="images/skin/skin.png"
            fill
          />
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover z-[2]"
            alt="skin_info"
            src="images/skin/skin_info.png"
            fill
          />
        </div>
      </div>
      <Section title="초대합니다." border>
        <div className="text-sm leading-6 mb-[30px] text-center text-[#534741]">
          <p>열 번의 사계를 지나, 새로이 준비한 오늘</p>
          <br />
          <p>이제 손을 맞잡고 나란히 걸어온</p>
          <p>지난 10년 여정에 쉼표를 그리며,</p>
          <p>나와 너에서 우리로 시작을 잇고자 합니다.</p>
          <p>배가 될 행복의 마침표로 향한 새 출발의</p>
          <p>준엄한 걸음을 여러분과 함께 내딛고 싶습니다.</p>
          <p>오롯이 귀한 발길을 보태어 자리를 빛내주세요.</p>
        </div>
        <div className="flex flex-row justify-center items-stretch mb-5 text-sm text-[#534741] mx-auto">
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
          <div className="flex flex-col justify-around gap-y-2.5 text-center px-[5px]">
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
        <div className="border border-solid border-[#fece75] mb-[33px] rounded-[10px]">
          <Contact name="배준오" number="01062635217" />
          <Contact name="배승환" number="01027269100" />
          <Contact name="김형자" number="01066472111" />
        </div>
        <div className="border border-solid border-[#fece75] mb-[33px] rounded-[10px]">
          <Contact name="이지나" number="01048036799" />
          <Contact name="이성민" number="01049508866" />
          <Contact name="이솜" number="01087596799" />
        </div>
      </Section>
      <Section border>
        <Calendar year={2024} month={4} day={27} />
      </Section>
      {/* <div className="w-full h-32 bg-[#fffaee]"></div> */}
    </main>
  );
}
