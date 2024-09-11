import { Flex } from "@chakra-ui/react";
import CalendarPlanTemplate from "./PlanTemplate/CalendarPlanTemplate";
import useLeftbarStore from "../../stores/leftbarStore";
import React from "react";

export default function Plan() {
  const { isCollapsed } = useLeftbarStore();
  const width = isCollapsed ? "100%" : `calc(100% - 300px)`;
  const marginLeft = isCollapsed ? "0" : "300px";
  return (
    <Flex
      marginLeft={marginLeft}
      width={width}
      overflowY={"auto"}
      justifyContent={"center"}
    >
      <CalendarPlanTemplate />
    </Flex>
  );
}
