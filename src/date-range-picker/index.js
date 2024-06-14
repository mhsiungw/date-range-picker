import { useMemo, useState, useEffect } from "react";
import Day from "./components/day";
import Week from "./components/week";
import Header from "./components/header";
import Utils from "./utils";
import "./style.css";

export default function DateRangePicker({ onChange }) {
  const [range, setRange] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(Utils.getCurrent());
  const weeks = useMemo(() => Utils.getWeekArray(currentMonth), [currentMonth]);

  useEffect(() => {
    onChange(range);
  }, [range]);

  const handlePrevMonthSelect = () => {
    setCurrentMonth(Utils.subtractMonth(currentMonth, 1));
  };

  const handleNextMonthSelect = () => {
    setCurrentMonth(Utils.addMonth(currentMonth, 1));
  };

  const handleDaySelect = (nextDay) => {
    setRange(([start, end]) => {
      if (start && end) {
        return [];
      }

      if (!start && !end) {
        return [nextDay, undefined];
      }

      if (nextDay < start) {
        return [nextDay, start];
      }

      return [start, nextDay];
    });
  };

  return (
    <div className="date-range-picker">
      <Header
        header={currentMonth.format("YYYY 年 M 月")}
        onPrev={handlePrevMonthSelect}
        onNext={handleNextMonthSelect}
      />
      {weeks.map((week, index) => (
        <Week key={`week-${week[0]}`} aria-label={`Week ${index + 1}`}>
          {week.map((day) => (
            <span key={day.toString()} onDoubleClick={() => setRange([])}>
              <Day
                day={day}
                isToday={Utils.isToday(day)}
                isActive={Utils.isBetween(day, range)}
                isCurrentMonth={Utils.isSameMonth(currentMonth, day)}
                onDaySelect={handleDaySelect}
              />
            </span>
          ))}
        </Week>
      ))}
    </div>
  );
}
