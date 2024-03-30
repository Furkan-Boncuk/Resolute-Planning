import { Flex, Text } from "@chakra-ui/react";
import {
  faCircleInfo,
  faCircleXmark,
  faPen,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rp } from "../../../../public/colors/colors";
import React from "react";

export default function CalendarTopic() {
  return (
    <Flex
      alignItems={"center"}
      padding={"5px 10px"}
      justifyContent={"space-between"}
      gap={"8px"}
      backgroundColor={rp.app.calendarTopicsBg}
      borderRadius={"5px"}
    >
      <Flex alignItems={"center"} gap={"8px"}>
        <FontAwesomeIcon icon={faTag} color="red" fontSize={"22px"} />
        <Text fontSize={"17px"}>Vize Sınavları</Text>
      </Flex>
      <Flex gap={"8px"}>
        <FontAwesomeIcon
          icon={faCircleInfo}
          cursor={"pointer"}
          color={rp.app.icons.info}
        />
        <FontAwesomeIcon
          icon={faCircleXmark}
          cursor={"pointer"}
          color={rp.app.icons.circleX}
        />
        <FontAwesomeIcon
          icon={faPen}
          cursor={"pointer"}
          color={rp.app.icons.pen}
        />
      </Flex>
    </Flex>
  );
}
