import { useState, useCallback } from "react";
import { Calendar } from "@natscale/react-calendar";
import "./calendarTest.css";
import { Value } from "@natscale/react-calendar/dist/utils/types";
import React from "react";

export default function CalendarTest() {
  const [selectedDate, setSelectedDate] = useState<Value>();

  const handleDateChange = useCallback((value: Value) => {
    console.log(value);
    setSelectedDate(value);
  }, []);
  
  return (
    <div>
      <Calendar
        className={"customcalendar customcalendar-selected rc_header_label"}
        initialView="month_dates"
        isRangeSelector={true}
        monthsLabel={{
          0: "Ocak",
          1: "Şubat",
          2: "Mart",
          3: "Nisan",
          4: "Mayıs",
          5: "Haziran",
          6: "Temmuz",
          7: "Ağustos",
          8: "Eylül",
          9: "Ekim",
          10: "Kasım",
          11: "Aralık",
        }}
        weekDaysLabel={{
          0: "P",
          1: "P",
          2: "S",
          3: "Ç",
          4: "P",
          5: "C",
          6: "C",
        }}
        startOfWeek={1}
        lockView={true}
        hideAdjacentDates={true}
        value={selectedDate}
        onChange={handleDateChange}
        isMultiSelector={false}
      />
    </div>
  );
}
