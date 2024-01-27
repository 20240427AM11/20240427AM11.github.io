import { cn } from "@/lib/utils";
import { Section, SectionHeader, SectionTitle } from "@/types/section";
import localFont from "next/font/local";
import { ReactNode } from "react";

const muncheWriteFont = localFont({
  src: "../../public/fonts/munche_seuki_jung.woff2",
});

const SectionTitle = ({ title }: SectionTitle) => {
  return (
    <div className="pb-[50px] pt-[60px] text-center text-xl font-medium leading-[22px]">
      {title && <div className={`text-[#333333]`}>{title}</div>}
    </div>
  );
};

const SectionHeader = ({ clean }: SectionHeader): ReactNode => {
  return (
    <div
      className={cn(
        "flex justify-between border-solid border-[#7f838c] pb-[14px] text-xs italic leading-[13px]",
        clean ? "border-none" : "border-b",
      )}
    >
      <div className="text-[#7f838c]">wedding invitation.</div>
      <div className="text-[#7f838c]">04/27</div>
    </div>
  );
};

const Section = ({ children, title, odd, bg, clean }: Section): ReactNode => {
  return (
    <div
      className={cn(
        "px-[35px] pb-16 pt-[25px]",
        odd ? "bg-[#ffffff]" : "bg-[#fdf8f4]",
        bg
          ? "bg-[#fdf8f4] bg-[url(/images/skin/calendar.jpg)] bg-[length:600px] bg-[position:center_15%] bg-no-repeat"
          : "",
      )}
    >
      <SectionHeader clean={clean} />
      <div>
        {title && <SectionTitle title={title} />}
        {children}
      </div>
    </div>
  );
};
export default Section;
