"use client";

import { updateMessage } from "@/lib/server-action";
import { GuestMessage } from "@/types/guest";
import Image from "next/image";
import { ChangeEvent, useMemo, useState } from "react";

const GuestMessage = ({ message }: { message: GuestMessage }) => {
  const [isOpen, setOpen] = useState(false);
  const [relativeTime, setRelativeTIme] = useState(
    Math.floor((+new Date() - +new Date(message.createdDate)) / 1000),
  );
  const [editMessage, setEditMessage] = useState(message.message);
  const [password, setPassword] = useState("");

  const timeText = useMemo(() => {
    let time = relativeTime;
    let unit = "초";
    if (time >= 60 && unit === "초") {
      time = Math.floor(time / 60);
      unit = "분";
    }
    if (time >= 60 && unit === "분") {
      time = Math.floor(time / 60);
      unit = "시간";
    }
    if (time >= 24 && unit === "시간") {
      time = Math.floor(time / 24);
      unit = "일";
    }
    return `${time}${unit} 전`;
  }, [relativeTime]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPassword("");
    setEditMessage(message.message);
  };

  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditMessage(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleApply = () => {
    updateMessage(1, password, editMessage);
    handleClose();
  };

  return (
    <>
      <div className="relative text-center">
        <div className="mt-12">
          <div className="relative inline-block h-3 w-4 -rotate-[50deg] rounded-[50%] bg-transparent text-left shadow-[inset_2px_2px_0_0_#93867d] after:absolute after:-left-[1px] after:bottom-0 after:h-2.5 after:w-2.5 after:rounded-[50%] after:bg-[#93867d] after:content-['']">
            &nbsp;
          </div>
          <div className="relative inline-block h-3 w-4 -rotate-[50deg] rounded-[50%] bg-transparent text-left shadow-[inset_2px_2px_0_0_#93867d] after:absolute after:-left-[1px] after:bottom-0 after:h-2.5 after:w-2.5 after:rounded-[50%] after:bg-[#93867d] after:content-['']">
            &nbsp;
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="mt-[30px] inline-block text-[15px] text-[#000000]">
                {message.name}
              </div>
              <div className="ml-[15px] mt-[30px] inline-block text-[13px] text-[#777777]">
                {timeText}
              </div>
            </div>
            <div className="clear-both mt-3 break-all text-center text-[15px] leading-6 text-[#333333]">
              {message.message}
            </div>
          </div>
          <div>
            <div>
              <div
                className="mx-[5px] mt-3 inline-block h-7 w-[66px] cursor-pointer rounded-[15px] bg-[#e7b596] text-[14px] leading-7 text-[#ffffff] outline-none"
                onClick={handleOpen}
              >
                수정
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <div className="fixed left-0 top-0 z-10 h-full w-full cursor-pointer bg-[rgb(0,0,0)] opacity-50" />
          <div className="fixed left-0 top-[50px] z-[11] box-border w-[400px] border border-x-0 border-solid border-[#ececec] bg-[#ffffff] p-5">
            <Image
              className="absolute right-[15px] top-[17px] cursor-pointer"
              src="images/icon/x.png"
              alt="x"
              width={17}
              height={17}
              onClick={handleClose}
            />
            <div className="mb-5 box-border h-[45px] bg-[url(/images/icon/user.png)] bg-[length:45px] bg-no-repeat py-[3px] pl-[60px] text-[15px] leading-5 text-[#666666]">
              축하 메시지 수정
            </div>
            <div>
              <textarea
                className="h-auto w-full appearance-none overflow-hidden border border-solid border-[#ececec] bg-[#f8f8f8] p-2.5 text-[16px] leading-[18px]"
                value={editMessage}
                onChange={handleChangeMessage}
              />
            </div>
            <div>
              <input
                className="border-#[dddddd] mb-[11px] box-border h-[38px] w-full border border-solid bg-[#f8f8f8] p-[13px] text-[16px]"
                maxLength={99}
                placeholder="비밀번호(글 등록 시 입력한 비밀번호)"
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
            </div>
            <div className="pb-2.5 pt-[5px]">
              <div className="flex gap-2.5">
                <div className="w-auto flex-grow">
                  <div
                    className="box-border cursor-pointer rounded-[20px] border border-solid border-[#666666] p-3 text-center text-[12px] text-[#333333]"
                    onClick={handleApply}
                  >
                    등록하기
                  </div>
                </div>
                <div className="w-[90px] flex-shrink-0">
                  <div className="border[#dddddd] box-border cursor-pointer rounded-[20px] border border-solid bg-[#dddddd] p-3 text-center text-[12px] text-[#333333]">
                    삭제
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GuestMessage;
