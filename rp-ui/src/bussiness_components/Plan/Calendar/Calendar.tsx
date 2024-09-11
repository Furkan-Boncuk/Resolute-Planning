import { Flex, Text } from "@chakra-ui/react";
import { rp } from "../../../../public/colors/colors";
import useDateStore from "../../../stores/dateStore";
import CalendarTest from "../../../elements/CalendarTest";
import React from "react";
import RpTitle from "../../../ui-components/rpComponents/RpTitle";

export default function Calendar() {
  const {
    current,
    year,
    monthNumber,
    monthString,
    week,
    day,
    hour,
    minute,
    second,
    weekFirstAndLastDays,
    monthFirstAndLastDays,
    daysInMonth,
    monthFirstAndLastDays_DateObject,
    dayOfWeekOfMonth,
  } = useDateStore();

  console.log(current);
  console.log(year);
  console.log(monthNumber);
  console.log(monthString);
  console.log(week);
  console.log(day);
  console.log(hour);
  console.log(minute);
  console.log(second);
  console.log(weekFirstAndLastDays);
  console.log(monthFirstAndLastDays["firstDay"]);
  console.log(daysInMonth);
  console.log(monthFirstAndLastDays_DateObject);
  console.log(() => dayOfWeekOfMonth);

  return (
    <Flex
      direction={"column"}
      padding={"15px"}
      borderRadius={"5px"}
      flex={"1"}
      backgroundColor={rp.app.calendarBg}
      width={"max-content"}
      height={"max-content"}
    >
      <RpTitle text={"Takvim"} />
      <Flex
        direction={"column"}
        padding={"25px 15px 25px 5px"}
        borderRadius={"5px"}
        backgroundColor={rp.app.calendar}
        width={"max-content"}
        height={"max-content"}
      >
        <CalendarTest />
      </Flex>
    </Flex>
  );
}
