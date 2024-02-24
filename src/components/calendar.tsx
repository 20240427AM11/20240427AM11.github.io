import { cn } from "@/lib/utils";
import { Calendar, Day } from "@/types/calendar";
import localFont from "next/font/local";
import { Key, ReactNode } from "react";

const spoqaFont = localFont({
  src: "../../public/fonts/Spoqa Han Sans Light.woff2",
});

const Day = ({ date, dDay }: Day): ReactNode => {
  return (
    <td
      key={date}
      className="h-9 text-center text-[12px] font-light text-[#333333]"
    >
      <span
        className={cn(
          "",
          dDay
            ? "inline-block size-[25px] rounded-full bg-[#e7b596] text-center leading-[25px] text-[#ffffff]"
            : "",
        )}
      >
        {date}
      </span>
    </td>
  );
};

const getFirstDateOfMonth = (date: Date): Date => {
  const tempDate: Date = new Date(date);
  tempDate.setDate(1);
  return tempDate;
};

const getLastDateOfMonth = (date: Date): Date => {
  const tempDate: Date = new Date(date);
  tempDate.setMonth(tempDate.getMonth() + 1);
  tempDate.setDate(0);
  return tempDate;
};

const Calendar = ({ year, month, day }: Calendar): ReactNode => {
  const dDay: Date = new Date(`${year}-${month}-${day}`);
  const weekdayString: Array<String> = [
    "일",
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
  ];
  const firstDate: Date = getFirstDateOfMonth(dDay);
  const lastDate: Date = getLastDateOfMonth(dDay);
  const firstDay: number = firstDate.getDay();
  const lastDay: number = lastDate.getDay();
  const weekCount: number = (firstDay + lastDate.getDate() + 6 - lastDay) / 7;

  return (
    <div className="mb-5 mt-[45px] rounded-[10px] bg-[#ffffff] px-5 py-[30px]">
      <div className="mb-[14px] text-center text-lg font-normal leading-[18px] text-[#534741]">
        {`${year}.${month.toString().padStart(2, "0")}`}
      </div>
      <table className="h-full w-full table-fixed border-collapse">
        <tbody className={spoqaFont.className}>
          <tr>
            {weekdayString.map((day) => (
              <th
                key={day as Key}
                className="h-9 text-center text-[12px] font-light text-[#7f838c]"
              >
                <span>{day}</span>
              </th>
            ))}
          </tr>
          {new Array(weekCount).fill(0).map((_, week) => (
            <tr key={week}>
              {new Array(7).fill(0).map((__, weekday) => {
                let date: number = Math.max(
                  week * 7 + weekday - firstDay + 1,
                  0,
                );
                if (date > lastDate.getDate()) {
                  date = 0;
                }
                return (
                  <Day
                    key={`${week}_${weekday}`}
                    date={date || undefined}
                    dDay={date === day}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Calendar;
