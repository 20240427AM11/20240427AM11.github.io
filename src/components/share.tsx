const Share = () => {
  return (
    <div>
      <div className="flex h-9 w-full justify-center">
        <div className="mr-[33px] h-[35px] w-[35px] cursor-pointer bg-[url(/images/icon/kakao.png)] bg-[length:35px] bg-no-repeat text-[12px]" />
        <div className="mr-[33px] h-[35px] w-[35px] cursor-pointer bg-[url(/images/icon/story.png)] bg-[length:35px] bg-no-repeat text-[12px]" />
        <div className="mr-[33px] h-[35px] w-[35px] cursor-pointer bg-[url(/images/icon/line.png)] bg-[length:35px] bg-no-repeat text-[12px]" />
        <div className="mr-[33px] h-[35px] w-[35px] cursor-pointer bg-[url(/images/icon/facebook.png)] bg-[length:35px] bg-no-repeat text-[12px]" />
      </div>
      <div className="w-full pt-[30px] text-center text-[13px] italic">
        <div className="before:content-['Thank_you!']" />
        <div className="relative mx-auto mb-0 mt-[3px] h-[15px] w-2 before:absolute before:bottom-0 before:left-0 before:h-[13px] before:w-2 before:-rotate-[48deg] before:rounded-[50px_50px_0_0] before:bg-[#212530] before:content-[''] after:absolute after:bottom-0 after:h-[13px] after:w-2 after:rotate-[48deg] after:rounded-[50px_50px_0_0] after:bg-[#212530] after:content-['']" />
      </div>
    </div>
  );
};

export default Share;
