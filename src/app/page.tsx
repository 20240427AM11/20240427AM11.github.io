import Account from "@/components/account";
import Calendar from "@/components/calendar";
import { Contact, ContactWrapper } from "@/components/contact";
import Gallery from "@/components/gallery";
import Guest from "@/components/guest";
import MainSwiper from "@/components/main-swiper";
import Map from "@/components/map";
import Message from "@/components/message";
import Notice from "@/components/notice";
import Section from "@/components/section";
import Share from "@/components/share";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";

const seoulFont = localFont({
  src: "../../public/fonts/SeoulHangangJungL.woff2",
});

const bookkSerifThin = localFont({
  src: "../../public/fonts/bookk_serif_thin.ttf",
});

const bookkSerifBold = localFont({
  src: "../../public/fonts/bookk_serif_bold.ttf",
});

const bookkGothicLight = localFont({
  src: "../../public/fonts/bookk_gothic_thin.ttf",
});

export default function Home() {
  return (
    <main className={seoulFont.className}>
      <div className="w-full md:w-[375px]">
        <div className="relative aspect-[400/594] min-h-[557px] leading-[0]">
          <MainSwiper />
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
        <Section title="초대합니다." odd>
          <div
            className={cn(
              bookkSerifThin.className,
              "mb-[30px] text-center text-sm leading-6 tracking-[0.02em] text-[#534741]",
            )}
          >
            <p>열 번의 사계를 지나, 새로이 준비한 오늘</p>
            <br />
            <p>이제 손을 맞잡고 나란히 걸어온</p>
            <p>지난 10년 여정에 쉼표를 그리며,</p>
            <p>나와 너에서 우리로 시작을 잇고자 합니다.</p>
            <p>배가 될 행복의 마침표로 향한 새 출발의</p>
            <p>준엄한 걸음을 여러분과 함께 내딛고 싶습니다.</p>
            <p>오롯이 귀한 발길을 보태어 자리를 빛내주세요.</p>
          </div>
          <div
            className={cn(
              bookkSerifThin.className,
              "mx-auto mb-5 flex flex-row items-stretch justify-center text-sm text-[#534741]",
            )}
          >
            <div className="flex flex-col gap-y-2.5 pr-[5px] text-right tracking-[0.01em]">
              <div>
                <div>배승환</div>
                <div>김형자</div>
              </div>
              <div>
                <div>이성민</div>
                <div className="flex justify-between">
                  <span>이</span>
                  <span>솜</span>
                </div>
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
            <div
              className={cn(
                bookkSerifBold.className,
                "flex flex-col justify-around gap-y-2.5 font-bold",
              )}
            >
              <div>배준오</div>
              <div>이지나</div>
            </div>
          </div>
        </Section>
        <Section title="축하 연락처">
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
        <Section bg clean odd>
          <Calendar year={2024} month={4} day={27} />
        </Section>
        <Section
          title="10년의 데이트"
          sub={
            <div className={cn(bookkGothicLight.className)}>
              함께 걷고 웃고 손잡고 눈을 맞췄던
              <br />
              한강에서의 기억을 담아 보았습니다.
            </div>
          }
        >
          <Gallery />
        </Section>
        <Section title="오시는 길" odd>
          <Map />
        </Section>
        <Section title="안내사항">
          <Notice />
        </Section>
        <Section
          title="마음 전하는 곳"
          odd
          sub={
            <div className={cn(bookkSerifThin.className, "tracking-[0.02em]")}>
              축하의 마음을 담아 축의금을 전달해 보세요.
            </div>
          }
        >
          <Account />
        </Section>
        <Section id="message" title="축하 메시지">
          <Guest />
        </Section>
        <Section title="소식공유" odd header={false}>
          <Share />
        </Section>
      </div>
      <div
        id="message-shadow"
        className="m-auto w-full bg-[rgb(33,36,45)] transition-[height] duration-700"
      />
      {/* <div className="w-full h-32 bg-[#fffaee]"></div> */}
    </main>
  );
}
