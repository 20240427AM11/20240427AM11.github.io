"use server";

import { GuestMessage } from "@/types/guest";
import { cookies } from "next/headers";

export const createMessage = (
  name: string,
  password: string,
  message: string,
) => {
  const userName = cookies().get("userName");
  if (!userName) {
    cookies().set({
      name: "userName",
      value: name,
      expires: Date.now() + 34567890123,
    });
  }
  console.log(name, password, message);
};

export const updateMessage = (
  id: number,
  password: string,
  message: string,
) => {
  console.log(id, password, message);
};

export const getCookie = async (name: string) => {
  const value = await cookies().get(name)?.value;
  return value || "";
};

export const getMessages = async (): Promise<GuestMessage[]> => {
  const wait = new Promise((resolve) => setTimeout(resolve, 1000));
  await wait;
  console.log("test");
  return [
    {
      name: "배준오",
      message: "축하 메시지를 남겨주세요.",
      createdDate: new Date("2024-02-28T16:30:46.476Z").toISOString(),
    },
    {
      name: "배준오",
      message: "축하 메시지를 남겨주세요.",
      createdDate: new Date("2024-02-28T16:28:46.476Z").toISOString(),
    },
    {
      name: "배준오",
      message: "축하 메시지를 남겨주세요.",
      createdDate: new Date("2024-02-28T16:27:55.476Z").toISOString(),
    },
  ];
};
