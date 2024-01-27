import { cn } from "@/lib/utils";
import { Contact, ContactWrapper } from "@/types/contact";
import { ReactNode } from "react";

const ContactWrapper = ({ children }: ContactWrapper): ReactNode => {
  return (
    <div className="mx-2.5 mb-[30px] border border-solid border-[#80838a] last:mb-0">
      {children}
    </div>
  );
};

const Contact = ({ name, number }: Contact): ReactNode => {
  return (
    <div
      className={cn(
        "flex border-b border-solid border-[#80838a] last:border-none",
      )}
    >
      <div className="h-[43px] w-[65%] pl-[18px] text-[13px] leading-[43px] text-[#333333]">
        {name}
      </div>
      <a
        href={`tel:${number}`}
        className="inline-block h-10 w-[15%] cursor-pointer rounded-[50%] bg-[url('/images/icon/tel.png')] bg-[length:15px_16px] bg-[position:center_right] bg-no-repeat"
      ></a>
      <a
        href={`sms:${number}`}
        className="inline-block h-10 w-[15%] cursor-pointer rounded-[50%] bg-[url('/images/icon/msg.png')] bg-[length:16px_15px] bg-[position:center_right] bg-no-repeat"
      ></a>
    </div>
  );
};

export { Contact, ContactWrapper };
