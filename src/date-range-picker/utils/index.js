import moment from "moment";

class Utils {
  static getCurrentMonth() {
    return moment();
  }

  static isSameOrBefore(value, input) {
    return value.isSameOrBefore(input);
  }

  static isSameOrAfter(value, input) {
    return value.isSameOrAfter(input);
  }

  static isBefore(value, input) {
    return value.isBefore(input);
  }

  static isAfter(value, input) {
    return value.isAfter(input);
  }

  static isBetween(value, range) {
    const [start, end] = range;
    if (!start) {
      return value.isSame(end);
    }
    if (!end) {
      return value.isSame(start);
    }

    return value.isSameOrAfter(start) && value.isSameOrBefore(end);
  }

  static isSameMonth(currentMonth, value) {
    return value.isSame(currentMonth, "month");
  }

  static isToday(value) {
    return value.isSame(moment(), "day");
  }

  static subtractMonth(value, period) {
    return value.clone().subtract(period, "month");
  }

  static addMonth(value, period) {
    return value.clone().add(period, "month");
  }

  static startOfWeek(value) {
    return value.clone().startOf("week");
  }

  static endOfWeek(value) {
    return value.clone().endOf("week");
  }

  static startOfWMonth(value) {
    return value.clone().startOf("month");
  }

  static endOfMonth(value) {
    return value.clone().endOf("month");
  }

  static getWeekArray(value = this.getCurrentMonth()) {
    const start = this.startOfWeek(this.startOfWMonth(value));
    const end = this.endOfWeek(this.endOfMonth(value));
    const nestedWeeks = [];
    let current = start;
    let count = 0;

    while (current < end) {
      const weekNumber = Math.floor(count / 7);
      nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
      nestedWeeks[weekNumber].push(current);

      current = current.clone().add("day", 1);

      count += 1;
    }

    return nestedWeeks;
  }
}

export default Utils;
