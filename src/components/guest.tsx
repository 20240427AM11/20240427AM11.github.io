"use client";

import { getMessages } from "@/lib/server-action";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";
import { useEffect, useState } from "react";
import GuestMessage from "./guest-message";
import Message from "./message";

const bookkSerifThin = localFont({
  src: "../../public/fonts/bookk_serif_thin.ttf",
});

const Guest = () => {
  const [messages, setMessages] = useState<GuestMessage[]>([]);

  const initialize = async () => {
    setMessages(await getMessages());
  };

  useEffect(() => {
    initialize();
  }, []);
  return (
    <>
      <div className="-mt-[50px]">
        {messages.map((message, index) => (
          <GuestMessage key={index} message={message} />
        ))}
      </div>
      {messages.length === 0 && (
        <div className="-mt-[50px] h-[220px] text-center">
          <div className="mt-[70px]">
            <Image
              className="inline-block"
              src="images/icon/no_message.png"
              alt="no_message"
              width={45}
              height={45}
            />
          </div>
          <div
            className={cn(
              bookkSerifThin.className,
              "mt-[15px] text-[13px] tracking-[0.02em] text-[#999999]",
            )}
          >
            메시지를 남겨주세요.
          </div>
        </div>
      )}
      <Message />
    </>
  );
};

export default Guest;
