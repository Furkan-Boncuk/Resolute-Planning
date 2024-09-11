import { Box, Text } from "@chakra-ui/react";
import { rp } from "../../../../public/colors/colors";
import { TodoStatus } from "../../../types/types";

interface TodoProps {
  todoStatus: TodoStatus;
}

export default function Todo({todoStatus}: TodoProps) {
  return (
    <Box
      border={
        todoStatus === TodoStatus.todo
        ? `2px solid ${rp.app.todo.todoBg}` :
        todoStatus === TodoStatus.active ? `2px solid ${rp.app.todo.activeBg}` : `2px solid ${rp.app.todo.doneBg}`
      }
      width={"92%"}
      backgroundColor={rp.app.todoBoxBg}
      padding={"10px"}
      borderRadius={"5px"}
    >
      <Text
        margin={"0"}
        fontSize={"1rem"}
        color={rp.app.textSoft}
        lineHeight={"normal"}
      >
        Toplantıya girilecek.
      </Text>
    </Box>
  );
}
