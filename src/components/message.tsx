"use client";

import { createMessage, getCookie } from "@/lib/server-action";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";
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
  const [initialName, setInitialName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenPopup, setOpenPopup] = useState(false);

  const initialize = async () => {
    setInitialName(await getCookie("userName"));
  };

  const handleClear = () => {
    setName(initialName);
    setPassword("");
    initialize();
  };

  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleComment = () => {
    if (!message) return;
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    handleClear();
  };

  const handleClickApply = () => {
    if (!name) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    // To-Do : 메시지 등록
    createMessage(name, password, message);
    setMessage("");
    handleClosePopup();
  };

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  useEffect(() => {
    const messageWrapper = document.querySelector(
      "#message-wrapper",
    ) as HTMLDivElement;
    const messageShadow = document.querySelector(
      "#message-shadow",
    ) as HTMLDivElement;
    if (isOpen) {
      messageShadow.style.setProperty(
        "height",
        `${messageWrapper.clientHeight}px`,
      );
    } else {
      messageShadow.style.setProperty("height", "0px");
    }
  }, [message, isOpen]);

  useEffect(() => {
    initialize();
  }, []);

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
                "box-border w-full appearance-none overflow-hidden border border-solid border-[#ececec] p-2.5 text-[16px] leading-[18px] tracking-[0.02em]",
                message
                  ? "h-auto"
                  : "h-10 bg-[#f8f8f8] bg-[url(/images/icon/heart.png)] bg-[length:12px_13px] bg-[13px_11px] bg-no-repeat pl-[27px]",
              )}
              rows={message.split("\n").length}
              placeholder={`${name ? `${name}님, ` : ""}축하 메시지를 남겨주세요`}
              value={message}
              onChange={handleChangeMessage}
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
      {isOpenPopup && (
        <>
          <div className="fixed left-0 top-0 z-10 h-full w-full cursor-pointer bg-[rgb(0,0,0)] opacity-50"></div>
          <div className="fixed left-0 top-[50px] z-[11] w-[400px] border border-l-0 border-r-0 border-solid border-[#ececec] bg-[#ffffff] text-[12px]">
            <Image
              onClick={handleClosePopup}
              src="images/icon/x.png"
              alt="x"
              width={17}
              height={17}
              className="absolute right-[15px] top-[17px] cursor-pointer"
            />
            <div className="mb-5 box-border h-[45px] bg-[url(/images/icon/user.png)] bg-[length:45px] bg-no-repeat py-[3px] pl-[60px] text-[15px] leading-5 text-[#666666]">
              이름과 비밀번호를 입력하시면
              <br />
              등록이 완료됩니다!
            </div>
            <div>
              <input
                className="border-#[dddddd] mb-[11px] box-border h-[38px] w-full border border-solid bg-[#f8f8f8] p-[13px] text-[16px]"
                maxLength={50}
                placeholder="이름(본인이름)"
                value={name}
                onChange={handleChangeName}
              />
            </div>
            <div>
              <input
                className="border-#[dddddd] mb-[11px] box-border h-[38px] w-full border border-solid bg-[#f8f8f8] p-[13px] text-[16px]"
                maxLength={99}
                placeholder="비밀번호(글 수정 및 삭제 용도)"
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
            </div>
            <div className="pb-2.5 pt-[5px]">
              <div
                className="box-border cursor-pointer rounded-[20px] border border-solid border-[#666666] p-3 text-center text-[12px] text-[#333333]"
                onClick={handleClickApply}
              >
                등록하기
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Message;
