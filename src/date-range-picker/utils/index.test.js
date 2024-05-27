import moment from "moment";
import Utils from ".";

describe("Utils class", () => {
  test("getCurrent should return the current moment object", () => {
    const now = moment();
    expect(Utils.getCurrent().isSame(now, "day")).toBe(true);
  });

  test("isSameOrBefore should return true if the first date is the same or before the second date", () => {
    const date1 = moment("2024-05-20");
    const date2 = moment("2024-05-25");
    expect(Utils.isSameOrBefore(date1, date2)).toBe(true);
    expect(Utils.isSameOrBefore(date2, date1)).toBe(false);
    expect(Utils.isSameOrBefore(date1, date1)).toBe(true);
  });

  test("isSameOrAfter should return true if the first date is the same or after the second date", () => {
    const date1 = moment("2024-05-20");
    const date2 = moment("2024-05-25");
    expect(Utils.isSameOrAfter(date2, date1)).toBe(true);
    expect(Utils.isSameOrAfter(date1, date2)).toBe(false);
    expect(Utils.isSameOrAfter(date1, date1)).toBe(true);
  });

  test("isBefore should return true if the first date is before the second date", () => {
    const date1 = moment("2024-05-20");
    const date2 = moment("2024-05-25");
    expect(Utils.isBefore(date1, date2)).toBe(true);
    expect(Utils.isBefore(date2, date1)).toBe(false);
  });

  test("isAfter should return true if the first date is after the second date", () => {
    const date1 = moment("2024-05-20");
    const date2 = moment("2024-05-25");
    expect(Utils.isAfter(date2, date1)).toBe(true);
    expect(Utils.isAfter(date1, date2)).toBe(false);
  });

  test("isBetween should return true if the date is between the range", () => {
    const date = moment("2024-05-20");
    const start = moment("2024-05-01");
    const end = moment("2024-05-31");
    expect(Utils.isBetween(date, [start, end])).toBe(true);
    expect(Utils.isBetween(date, [start, null])).toBe(false);
    expect(Utils.isBetween(date, [null, end])).toBe(false);
  });

  test("isSameMonth should return true if the dates are in the same month", () => {
    const date1 = moment("2024-05-20");
    const date2 = moment("2024-05-25");
    expect(Utils.isSameMonth(date1, date2)).toBe(true);
    const date3 = moment("2024-06-01");
    expect(Utils.isSameMonth(date1, date3)).toBe(false);
  });

  test("isToday should return true if the date is today", () => {
    const today = moment();
    expect(Utils.isToday(today)).toBe(true);
    const notToday = moment().subtract(1, "day");
    expect(Utils.isToday(notToday)).toBe(false);
  });

  test("subtractMonth should correctly subtract months from a date", () => {
    const date = moment("2024-05-25");
    const newDate = Utils.subtractMonth(date, 1);
    expect(newDate.isSame(moment("2024-04-25"), "day")).toBe(true);
  });

  test("addMonth should correctly add months to a date", () => {
    const date = moment("2024-05-25");
    const newDate = Utils.addMonth(date, 1);
    expect(newDate.isSame(moment("2024-06-25"), "day")).toBe(true);
  });

  test("startOfWeek should return the start of the week for a given date", () => {
    const date = moment("2024-05-25");
    const startOfWeek = Utils.startOfWeek(date);
    expect(startOfWeek.isSame(moment("2024-05-19"), "day")).toBe(true); // Assuming week starts on Sunday
  });

  test("endOfWeek should return the end of the week for a given date", () => {
    const date = moment("2024-05-25");
    const endOfWeek = Utils.endOfWeek(date);
    expect(endOfWeek.isSame(moment("2024-05-25"), "day")).toBe(true); // Assuming week ends on Saturday
  });

  test("startOfWMonth should return the start of the month for a given date", () => {
    const date = moment("2024-05-25");
    const startOfMonth = Utils.startOfWMonth(date);
    expect(startOfMonth.isSame(moment("2024-05-01"), "day")).toBe(true);
  });

  test("endOfMonth should return the end of the month for a given date", () => {
    const date = moment("2024-05-25");
    const endOfMonth = Utils.endOfMonth(date);
    expect(endOfMonth.isSame(moment("2024-05-31"), "day")).toBe(true);
  });

  test("getWeekArray should return an array of weeks for the given month", () => {
    const date = moment("2024-05-25");
    const weekArray = Utils.getWeekArray(date);
    expect(weekArray.length).toBeGreaterThan(0); // There should be weeks in the month
    weekArray.forEach((week) => expect(week.length).toBe(7)); // Each week should have 7 days
  });
});
