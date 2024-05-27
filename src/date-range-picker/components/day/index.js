import classNames from "classnames";
import "./style.css";

const baseStyle = "day-btn";
export default function Day({
  day,
  isToday,
  isActive,
  isCurrentMonth,
  onDaySelect,
}) {
  const className = classNames(baseStyle, {
    [`${baseStyle}--today`]: isToday,
    [`${baseStyle}--active`]: isActive,
    [`${baseStyle}--not-current-month`]: !isCurrentMonth,
  });

  return (
    <button className={className} onClick={() => onDaySelect(day)}>
      {day.format("DD 日")}
    </button>
  );
}
