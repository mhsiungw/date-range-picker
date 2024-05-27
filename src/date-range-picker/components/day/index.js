import classNames from "classnames";
import Button from "../button";
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
    <Button
      className={className}
      aria-label={day.format("MM 月 DD 日")}
      onClick={() => onDaySelect(day)}
    >
      {day.format("DD 日")}
    </Button>
  );
}
