export const getWeekNumber = (date: Date) => {
  const clonedDate = new Date(date.getTime());
  const jan4th = new Date(clonedDate.getFullYear(), 0, 4);
  jan4th.setDate(jan4th.getDate() + (1 - jan4th.getDay()));
  return Math.ceil(
    ((clonedDate.getTime() - jan4th.getTime()) / 86400000 +
      jan4th.getDay() +
      1) /
      7
  );
};

export const getWeekFirstLastDays = (year: number, week: number) => {
  const jan1st = new Date(year, 0, 1);
  const firstDayOfYear = jan1st.getDay();
  const firstWeekStart = 1 + (8 - firstDayOfYear);
  const weekStart = firstWeekStart + (week - 2) * 7;
  const weekEnd = weekStart + 6;

  const dec31st = new Date(year, 11, 31);
  const lastDayOfYear = dec31st.getDay();
  let lastWeekEnd = 31 - lastDayOfYear;
  if (lastWeekEnd > 31) {
    lastWeekEnd = lastWeekEnd - 7;
  }

  const firstDay = new Date(year, 0, weekStart);
  const lastDay = new Date(year, 0, weekEnd);

  return {
    firstDay: `${firstDay.getDate()} ${firstDay.toLocaleString("default", {
      month: "long",
    })} ${year}`,
    lastDay: `${lastDay.getDate()} ${lastDay.toLocaleString("default", {
      month: "long",
    })} ${year}`,
  };
};

export const getMonthString = (month: number) => {
  switch (month) {
    case 0:
      return "Ocak";
      break;
    case 1:
      return "Şubat";
      break;
    case 2:
      return "Mart";
      break;
    case 3:
      return "Nisan";
      break;
    case 4:
      return "Mayıs";
      break;
    case 5:
      return "Haziran";
      break;
    case 6:
      return "Temmuz";
      break;
    case 7:
      return "Ağustos";
      break;
    case 8:
      return "Eylül";
      break;
    case 9:
      return "Ekim";
      break;
    case 10:
      return "Kasım";
      break;
    case 11:
      return "Aralık";
      break;
    default:
      return "---";
      break;
  }
};

type CalendarDays = {
  [key: string]: string;
};

export const calendarDays: CalendarDays = {
  Pazartesi: "P",
  Salı: "S",
  Çarşamba: "Ç",
  Perşembe: "P",
  Cuma: "C",
  Cumartesi: "C",
  Pazar: "P",
};

export const getMonthFirstLastDays = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  return {
    firstDay: `${getDayString(firstDayOfMonth.getDay())}`,
    lastDay: `${getDayString(lastDayOfMonth.getDay())}`,
  };
};

export const getMonthFirstLastDays_DateObject = (
  year: number,
  month: number
) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  return {
    firstDay: firstDayOfMonth,
    lastDay: lastDayOfMonth,
  };
};

export const getDayString = (day: number) => {
  switch (day) {
    case 0:
      return "Pazar";
      break;
    case 1:
      return "Pazartesi";
      break;
    case 2:
      return "Salı";
      break;
    case 3:
      return "Çarşamba";
      break;
    case 4:
      return "Perşembe";
      break;
    case 5:
      return "Cuma";
      break;
    case 6:
      return "Cumartesi";
      break;
    default:
      return "---";
      break;
  }
};

export const getDaysInMonth = (year: number, month: number) => {
  const lastDayOfMonth = new Date(year, month + 1, 0);
  return lastDayOfMonth.getDate();
};

export const getDayOfWeekOfMonth = (
  year: number,
  month: number,
  dayOfMonth: number
): string => {
  const date = new Date(year, month - 1, 1);

  const firstDayOfWeek = date.getDay();

  const dayOfWeek = (firstDayOfWeek + dayOfMonth - 1) % 7;

  const dayNames = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  return dayNames[dayOfWeek];
};
