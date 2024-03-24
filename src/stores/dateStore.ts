import { create } from "zustand";
import {
  getDaysInMonth,
  getMonthFirstLastDays,
  getMonthFirstLastDays_DateObject,
  getMonthString,
  getWeekFirstLastDays,
  getWeekNumber,
  getDayOfWeekOfMonth,
} from "../helpers/dateHelpers";

interface DateState {
  current: Date;
  setCurrent: (date: Date) => void;
  year: number;
  monthNumber: number;
  monthString: string;
  week: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  weekFirstAndLastDays: { firstDay: string; lastDay: string };
  monthFirstAndLastDays: { firstDay: string; lastDay: string };
  daysInMonth: number;
  monthFirstAndLastDays_DateObject: { firstDay: Date; lastDay: Date };
  dayOfWeekOfMonth: (dayOfMonth: number) => string;
}

const useDateStore = create<DateState>((set) => ({
  current: new Date(),
  setCurrent: (date) => set({ current: date }),
  year: new Date().getFullYear(),
  monthNumber: new Date().getMonth(),
  monthString: getMonthString(new Date().getMonth()),
  week: getWeekNumber(new Date()),
  day: new Date().getDate(),
  hour: new Date().getHours(),
  minute: new Date().getMinutes(),
  second: new Date().getSeconds(),
  weekFirstAndLastDays: getWeekFirstLastDays(
    new Date().getFullYear(),
    getWeekNumber(new Date())
  ),
  monthFirstAndLastDays: getMonthFirstLastDays(
    new Date().getFullYear(),
    new Date().getMonth()
  ),
  daysInMonth: getDaysInMonth(new Date().getFullYear(), new Date().getMonth()),
  monthFirstAndLastDays_DateObject: getMonthFirstLastDays_DateObject(
    new Date().getFullYear(),
    new Date().getMonth()
  ),
  dayOfWeekOfMonth: (dayOfMonth) =>
    getDayOfWeekOfMonth(
      new Date().getFullYear(),
      new Date().getMonth(),
      dayOfMonth
    ),
}));

export default useDateStore;
