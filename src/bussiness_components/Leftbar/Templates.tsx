import { Box, Flex, Text } from "@chakra-ui/react";
import { faBoxOpen, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rp } from "../../../public/colors/colors";
import React from "react";

export default function Templates() {
  return (
    <Flex
      alignItems={"center"}
      fontSize={"17px"}
      fontWeight={400}
      cursor={"pointer"}
      backgroundColor={rp.app.leftbarItemsBg}
      p={"0px 10px"}
      borderRadius={"5px"}
      justifyContent={"space-between"}
      _hover={{
        backgroundColor: rp._hover.leftbarItemsBg,
        color: rp._hover.textSoft,
      }}
    >
      <Flex alignItems={"center"} gap={"8px"}>
        <FontAwesomeIcon icon={faBoxOpen} />
        <Text>Templates</Text>
      </Flex>
      <Box pr={"10px"}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Box>
    </Flex>
  );
}
