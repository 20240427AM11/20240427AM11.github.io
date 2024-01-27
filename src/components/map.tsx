const Map = () => {
  return (
    <>
      <div className="mb-5 text-center leading-[26px]">
        <div className="text-[#333333] underline decoration-[#797979] underline-offset-[3.5px]">
          아만티호텔 서울
        </div>
        <div className="text-[#333333]">서울 마포구 월드컵북로 31</div>
        <div className="text-[#333333]">02-332-0158</div>
        <a href="tel:02-332-0158">
          <div className="m-auto mt-2.5 inline-block h-[30px] w-[100px] rounded-[15px] border border-solid border-transparent bg-[#e7b596] bg-[url(/images/icon/tel_white.png)] bg-[length:auto_14px] bg-[position:12px_center] bg-no-repeat pl-[22px] text-sm leading-[31px] text-[#ffffff]">
            전화문의
          </div>
        </a>
      </div>
    </>
  );
};

export default Map;
