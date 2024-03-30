import { Flex, Input, Text } from "@chakra-ui/react";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rp } from "../../../../public/colors/colors";
import React from "react";

export default function CreateNewTopicModal() {
  return (
    <Flex
      position={"relative"}
      backgroundColor={rp.app.calendarTopicsInputBg}
      padding={"5px 10px"}
      borderRadius={"5px"}
    >
      <Input
        outline={"none"}
        padding={"10px"}
        border={"none"}
        backgroundColor={"transparent"}
        autoFocus={true}
        width={"25vw"}
        fontSize={"17px"}
        placeholder="Vize Sınavları, Spor, Beslenme vb..."
        pl={"40px"}
      />
      <Text position={"absolute"} bottom={"-8px"} left={"10px"}>
        <FontAwesomeIcon icon={faTag} color="orange" fontSize={"30px"} />
      </Text>
    </Flex>
  );
}
