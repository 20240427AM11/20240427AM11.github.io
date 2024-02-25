import Image from "next/image";

const Guest = () => {
  return (
    <>
      <div />
      <div />
      <div className="h-[220px] text-center">
        <div className="mt-[70px]">
          <Image
            className="inline-block"
            src="images/icon/no_message.png"
            alt="no_message"
            width={45}
            height={45}
          />
        </div>
        <div className="mt-[15px] text-[13px] text-[#999999]">
          메시지를 남겨주세요.
        </div>
      </div>
    </>
  );
};

export default Guest;
