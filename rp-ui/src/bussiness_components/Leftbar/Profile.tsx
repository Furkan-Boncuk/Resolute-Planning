import { Flex, Image, Text } from "@chakra-ui/react";
import { rp } from "../../../public/colors/colors";
import React from "react";

export default function Profile() {
  return (
    <Flex
      alignItems={"center"}
      gap={"10px"}
      backgroundColor={rp.app.leftbarItemsBg}
      p={"10px"}
      borderRadius={"5px"}
      cursor={"pointer"}
      _hover={{backgroundColor: rp._hover.leftbarItemsBg, color: rp._hover.textSoft}}
    >
      <Image
        src={"/images/profile_picture.png"}
        height={"20%"}
        width={"20%"}
        borderRadius={"50%"}
        objectFit={"cover"}
        border={`2px solid ${rp.app.border}`}
      />
      <Text fontWeight={500} fontSize={"18px"}>
        Furkan Boncuk
      </Text>
    </Flex>
  );
}
