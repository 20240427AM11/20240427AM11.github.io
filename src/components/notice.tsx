const NoticeRow = ({
  no,
  title,
  content,
}: {
  no: number;
  title: string;
  content: string;
}) => (
  <div className="mb-[25px] flex leading-none">
    <div className="-mt-[7px] w-1/5 text-[42px] italic text-[#e5d3c5]">
      {String(no).padStart(2, "0")}
    </div>
    <div className="ml-2.5 w-full">
      <div className="pb-[3px] text-xs leading-none">{title}</div>
      <div className="break-all text-xs leading-5">{content}</div>
    </div>
  </div>
);
const Notice = () => {
  return (
    <div>
      <NoticeRow
        no={1}
        title="셔틀버스"
        content="홍대입구역 1번출구 하나은행 앞 10:00-11:00, 11:45-12:00, 10-15분"
      />
      <NoticeRow
        no={2}
        title="화환"
        content="식장 사정 상 화환은 정중히 사양합니다."
      />
    </div>
  );
};

export default Notice;
