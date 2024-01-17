import localFont from "next/font/local";

const spoqaFont = localFont({ src: '../../public/fonts/Spoqa Han Sans Light.woff2'});

const Calendar = () => {
  return (
    <div className="p-2.5 mb-5 bg-transparent">
      <div className="text-lg leading-[18px] font-normal mb-[14px] text-[#534741] text-center">2024.04</div>
      <table className="h-full w-full border-collapse table-fixed">
        <caption className="text-[0]">April 2024</caption>
        <tbody className={spoqaFont.className}>
          <tr>
            {['일', '월', '화', '수', '목', '금', '토'].map((day) => <th key={day} className="text-[12px] text-[#feae4b] h-9 font-light text-center"><span>{day}</span></th>)}
          </tr>
          <tr>
            {['', '1', '2', '3', '4', '5', '6'].map((day) => <td key={day} className="text-[12px] text-[#534741] h-9 font-light text-center"><span>{day}</span></td>)}
          </tr>
          <tr>
            {['7', '8', '9', '10', '11', '12', '13'].map((day) => <td key={day} className="text-[12px] text-[#534741] h-9 font-light text-center"><span>{day}</span></td>)}
          </tr>
          <tr>
            {['14', '15', '16', '17', '18', '19', '20'].map((day) => <td key={day} className="text-[12px] text-[#534741] h-9 font-light text-center"><span>{day}</span></td>)}
          </tr>
          <tr>
            {['21', '22', '23', '24', '25', '26', '27'].map((day) => <td key={day} className="text-[12px] text-[#534741] h-9 font-light text-center"><span className={`${day === '27' ? 'bg-[#feb956] text-[#ffffff] inline-block size-[25px] rounded-full text-center leading-[25px]' : ''}`}>{day}</span></td>)}
          </tr>
          <tr>
            {['28', '29', '30', '', '', '', ''].map((day) => <td key={day} className="text-[12px] text-[#534741] h-9 font-light text-center"><span>{day}</span></td>)}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Calendar