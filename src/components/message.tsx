"use client";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { ChangeEvent, useEffect, useState } from "react";

const bookkSerifThin = localFont({
  src: "../../public/fonts/bookk_serif_thin.ttf",
});

const bookkSerifBold = localFont({
  src: "../../public/fonts/bookk_serif_bold.ttf",
});

const Message = () => {
  const [isOpen, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [height, setHeight] = useState(0);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const handleComment = () => {
    if (!message) return;
    console.log(message);
  };

  useEffect(() => {
    const messageWrapper = document.querySelector(
      "#message-wrapper",
    ) as HTMLDivElement;
    console.log(
      "🚀 ~ useEffect ~ textarea.clientHeight:",
      messageWrapper.clientHeight,
    );
    if (isOpen) {
      setHeight(messageWrapper.clientHeight);
    } else {
      setHeight(0);
    }
  }, [message, isOpen]);
  useEffect(() => {
    let openState = false;

    const open = () => {
      openState = true;
      setOpen(() => true);
    };
    const close = () => {
      openState = false;
      setOpen(() => false);
    };
    const scrollEvent = () => {
      const windowScrollTop = document.documentElement.scrollTop;
      const message = document.querySelector("#message") as HTMLDivElement;
      const textarea = document.querySelector(
        "#textarea",
      ) as HTMLTextAreaElement;
      const messageTop = message.offsetTop;
      const windowHeight = window.innerHeight;
      const checkPoint = messageTop - (windowHeight / 10) * 9;
      const active = document.activeElement;

      if (windowScrollTop >= checkPoint && !openState) {
        open();
      }
      if (
        windowScrollTop < checkPoint &&
        openState &&
        !textarea.value &&
        active !== textarea
      ) {
        close();
      }
    };
    addEventListener("scroll", scrollEvent);
    return () => {
      removeEventListener("scroll", scrollEvent);
    };
  }, []);
  return (
    <>
      <div
        id="message-wrapper"
        className={cn(
          "fixed bottom-0 left-0 z-[5] box-border w-full bg-[#cfcfcf] px-[15px] pb-[30px] pt-5 transition-[bottom] duration-700",
          isOpen ? "bottom-0" : "-bottom-40",
        )}
      >
        <div className="box-border">
          <div className="pb-2.5 text-[0px]">
            <textarea
              id="textarea"
              className={cn(
                bookkSerifThin.className,
                "box-border w-full appearance-none overflow-hidden border border-solid border-[#ececec] bg-[#f8f8f8] bg-[url(/images/icon/heart.png)] bg-[length:12px_13px] bg-[13px_11px] bg-no-repeat p-2.5 pl-[27px] text-[16px] leading-[18px] tracking-[0.02em]",
                message ? "h-auto" : "h-10",
              )}
              rows={message.split("\n").length}
              placeholder="축하 메시지를 남겨주세요"
              value={message}
              onChange={handleChange}
            />
          </div>
          <div
            className={cn(
              bookkSerifBold.className,
              "cursor-pointer rounded-[20px] border border-solid p-3 text-center text-[12px] leading-none tracking-[0.01em]",
              message
                ? "border-[#ffffff] text-[#ffffff]"
                : "border-[#8d9398] text-[#8d9398]",
            )}
            onClick={handleComment}
          >
            등록하기
          </div>
        </div>
      </div>
      <div
        className="m-auto w-full bg-[rgb(33,36,45)] transition-[height] duration-700"
        style={{ height }}
      />
    </>
  );
};

export default Message;
