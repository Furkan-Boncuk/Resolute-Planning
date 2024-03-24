import { Flex, Text } from "@chakra-ui/react";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rp } from "../../../public/colors/colors.ts";
import React from "react";

export default function Logo() {
  return (
    <Flex
      mb={"10px"}
      fontWeight={400}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"0px 5px"}
    >
      <Flex
        fontSize={"24px"}
        alignItems={"center"}
        gap={"12px"}
        color={rp.app.logo}
      >
        <FontAwesomeIcon icon={faMap} />
        <Text lineHeight={"0"} fontWeight={"600"}>
          ResolutePlanning
        </Text>
      </Flex>
    </Flex>
  );
}
