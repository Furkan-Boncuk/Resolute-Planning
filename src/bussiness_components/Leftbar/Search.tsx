import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rp } from "../../../public/colors/colors";
import React from "react";

export default function Search() {
  return (
    <Flex
      alignItems={"center"}
      fontSize={"17px"}
      fontWeight={400}
      backgroundColor={rp.app.leftbarItemsBg}
      p={"0px 10px"}
      borderRadius={"5px"}
      justifyContent={"space-between"}
      _hover={{
        backgroundColor: rp._hover.leftbarItemsBg,
        color: rp._hover.textSoft,
      }}
    >
      <Flex position={"relative"} alignItems={"center"} gap={"8px"}>
        <Input
          p={"10px 10px 10px 25px"}
          fontSize={"18px"}
          backgroundColor={"transparent"}
          border={"none"}
          color={rp.app.textSoft}
          outline={"none"}
          placeholder="Planlarında Ara..."
        />
        <Box position={"absolute"} top={"8px"}>
          <FontAwesomeIcon icon={faSearch} />
        </Box>
      </Flex>
    </Flex>
  );
}
