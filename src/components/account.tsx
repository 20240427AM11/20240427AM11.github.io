"use client";

import { cn } from "@/lib/utils";
import { MouseEventHandler, useState } from "react";

function clipboard_copy(str: string) {
  var tmpTextarea = document.createElement("textarea");
  tmpTextarea.value = str;
  document.body.appendChild(tmpTextarea);
  tmpTextarea.select();
  tmpTextarea.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(tmpTextarea);
}

const AccountDetail = ({
  name,
  account,
  type,
  onClose,
}: {
  name: string;
  account: string;
  type: "blue" | "red";
  onClose: Function;
}) => {
  const handleCopy = () => {
    const text = account.replace(/-/g, "");
    clipboard_copy(text);
    alert(`${text} 복사되었습니다.`);
  };
  return (
    <div className="fixed left-1/2 top-[100px] z-10 w-4/5 -translate-x-1/2 bg-[white] text-[14px] leading-none">
      <div
        className={cn(
          "mt-[30px] text-center text-[16px]",
          type === "blue"
            ? "text-[rgb(138,165,214)]"
            : "text-[rgb(238,129,150)]",
        )}
      >
        {`${type === "blue" ? "신랑" : "신부"}측 계좌번호`}
      </div>
      <div className="mt-5 text-center">복사 버튼 클릭 시, 복사됩니다.</div>
      <div className="mt-[15px] px-[15px]">
        <div className="-mb-5 border border-solid border-[#80838a]">
          <div className="h-[43px] border-b border-solid border-b-[#80838a] pl-[15px] text-[14px] leading-[43px] tracking-[1px]">
            {name}
          </div>
          <div className="h-[43px] text-nowrap break-keep border-none pl-[15px] text-[14px] leading-[43px] tracking-[1px]">
            {account}
          </div>
        </div>
      </div>
      <div className="mt-[50px] h-9 leading-9">
        <div
          className="float-left h-[42px] w-1/2 cursor-pointer bg-[#f0d0bc] text-center text-[16px] leading-[38px] text-[#ffffff]"
          onClick={handleCopy}
        >
          복사
        </div>
        <div
          className="float-left h-[42px] w-1/2 cursor-pointer bg-[#f5f5f7] text-center text-[16px] leading-[38px] text-[#7f838c]"
          onClick={onClose as MouseEventHandler}
        >
          닫기
        </div>
      </div>
    </div>
  );
};

const AccountRow = ({
  name,
  account,
  type,
}: {
  name: string;
  account: string;
  type: "blue" | "red";
}) => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex h-[42px] justify-between border-b border-solid border-b-[#80838a] pl-3 text-[13px] leading-[42px] last:border-b-0">
        <div className="text-[13px] text-[#333333]">{name}</div>
        <div
          className="border-l border-solid border-l-[#80838a] px-2"
          onClick={handleOpen}
        >
          계좌
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="fixed left-0 top-0 z-10 h-full w-full cursor-pointer bg-[rgb(0,0,0)] opacity-40"
            onClick={handleClose}
          />
          <AccountDetail
            name={name}
            account={account}
            type={type}
            onClose={handleClose}
          />
        </>
      )}
    </>
  );
};

const Account = () => {
  return (
    <>
      <div className="mb-[15px] border border-solid border-[#80838a]">
        <AccountRow
          name="신랑 배준오"
          account="신한은행 110-258-141650"
          type="blue"
        />
        <AccountRow name="부 배승환" account="농협 745-02-007811" type="blue" />
        <AccountRow
          name="모 김형자"
          account="농협 717077-56-034970"
          type="blue"
        />
      </div>
      <div className="mb-[15px] border border-solid border-[#80838a]">
        <AccountRow
          name="신부 이지나"
          account="신한은행 110-532-783052"
          type="red"
        />
        <AccountRow
          name="부 이성민"
          account="하나은행 369-910119-78707"
          type="red"
        />
        <AccountRow
          name="모 이솜"
          account="하나은행 162-910366-14407"
          type="red"
        />
      </div>
    </>
  );
};

export default Account;
