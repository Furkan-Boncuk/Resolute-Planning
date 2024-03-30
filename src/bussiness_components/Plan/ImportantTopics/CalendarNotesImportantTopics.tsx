import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { rp } from "../../../../public/colors/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import CalendarTopic from "./CalendarTopic";
import React from "react";

export default function CalendarNotesImportantTopics() {
  return (
    <Box
      height={"auto"}
      padding={"15px"}
      borderRadius={"5px"}
      flex={"4"}
      backgroundColor={rp.app.calendarNotesImportantTopics}
      width={"auto"}
    >
      <Text fontSize={"18px"} fontWeight={600}>
        Konu Başlıkları
      </Text>
      <Flex direction={"column"} gap={"10px"}>
        <Flex direction={"row"} gap={"15px"}>
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
              width={"35vw"}
              fontSize={"17px"}
              placeholder="Vize Sınavları, Spor, Beslenme vb..."
              pl={"40px"}
            />
            <Text position={"absolute"} bottom={"-8px"} left={"10px"}>
              <FontAwesomeIcon icon={faTag} color="orange" fontSize={"30px"} />
            </Text>
          </Flex>
          <Button
            border={"none"}
            borderRadius={"5px"}
            backgroundColor={"#319795"}
            width={"5vw"}
            fontSize={"17px"}
            fontWeight={500}
            color={"rgb(230, 224, 224)"}
            cursor={"pointer"}
            _hover={{ backgroundColor: "#2C7A7B" }}
          >
            Ekle
          </Button>
        </Flex>
        <Flex wrap={"wrap"} gap={"10px"}>
          <CalendarTopic />
          <CalendarTopic />
          <CalendarTopic />
        </Flex>
      </Flex>
    </Box>
  );
}
