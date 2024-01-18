const Contact = ({ name, number }: { name: String; number: String }) => {
  return (
    <div className="border border-solid border-[#fece75] flex justify-evenly items-center py-1.5">
      <div className="w-3/5 h-10 leading-10 text-[13px] text-[#534741]">
        {name}
      </div>
      <a
        href={`tel:${number}`}
        className="inline-block h-10 cursor-pointer w-5 rounded-[50%] bg-[url('/images/icon/tel.png')] bg-no-repeat bg-center bg-[length:16px_15px]"
      ></a>
      <a
        href={`sms:${number}`}
        className="inline-block h-10 cursor-pointer w-5 rounded-[50%] bg-[url('/images/icon/msg.png')] bg-no-repeat bg-center bg-[length:16px_15px]"
      ></a>
    </div>
  );
};

export default Contact;
