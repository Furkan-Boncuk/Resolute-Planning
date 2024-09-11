import { Box, Flex, Text } from "@chakra-ui/react";
import { rp } from "../../../../public/colors/colors";
import React from "react";
import Todo from "./Todo";
import { TodoStatus } from "../../../types/types";
import RpTitle from "../../../ui-components/rpComponents/RpTitle";

export default function DailyTodos() {
  return (
    <Box
      height={"450px"}
      padding={"15px"}
      borderRadius={"5px"}
      backgroundColor={rp.app.dailyTodos}
    >
      <RpTitle text={"Günlük Yapılacaklar"} />
      <Flex direction={"row"} gap={"15px"} height={"95%"}>
        <Box
          flex={"1"}
          border={`2px solid ${rp.app.todoBorder.todoBg}`}
          padding={"10px"}
          borderRadius={"5px"}
          height={"90%"}
          overflowX={"hidden"}
        >
          <Flex direction={"column"} height={"100%"}>
            <RpTitle text={"Yapılacaklar"} pt={"0"} />
            <Flex
              borderRadius={"5px"}
              direction={"column"}
              gap={"10px"}
              overflowY={"auto"}
              height={"90%"}
            >
              <Todo todoStatus={TodoStatus.todo} />
              <Todo todoStatus={TodoStatus.todo} />
              <Todo todoStatus={TodoStatus.todo} />
              <Todo todoStatus={TodoStatus.todo} />
              <Todo todoStatus={TodoStatus.todo} />
              <Todo todoStatus={TodoStatus.todo} />
              <Todo todoStatus={TodoStatus.todo} />
              <Todo todoStatus={TodoStatus.todo} />
              <Todo todoStatus={TodoStatus.todo} />
              <Todo todoStatus={TodoStatus.todo} />
              <Todo todoStatus={TodoStatus.todo} />
            </Flex>
          </Flex>
        </Box>

        <Box
          flex={"1"}
          border={`2px solid ${rp.app.todoBorder.activeBg}`}
          padding={"10px"}
          borderRadius={"5px"}
          height={"90%"}
          overflowX={"hidden"}
        >
          <Flex direction={"column"} height={"100%"}>
            <RpTitle text={"Çalışılıyor"} pt={"0"} />
            <Flex
              borderRadius={"5px"}
              direction={"column"}
              gap={"10px"}
              overflowY={"auto"}
              height={"90%"}
            >
              <Todo todoStatus={TodoStatus.active} />
            </Flex>
          </Flex>
        </Box>

        <Box
          flex={"1"}
          border={`2px solid ${rp.app.todoBorder.doneBg}`}
          padding={"10px"}
          borderRadius={"5px"}
          height={"90%"}
          overflowX={"hidden"}
        >
          <Flex direction={"column"} height={"100%"}>
            <RpTitle text={"Tamamlandı"} pt={"0"} />
            <Flex
              borderRadius={"5px"}
              direction={"column"}
              gap={"10px"}
              overflowY={"auto"}
              height={"90%"}
            >
              <Todo todoStatus={TodoStatus.done} />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
