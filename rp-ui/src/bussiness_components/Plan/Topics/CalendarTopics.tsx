import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { rp } from "../../../../public/colors/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTag } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Topic from "./Topic";
import RpTitle from "../../../ui-components/rpComponents/RpTitle";
import { RP_Topics, TopicFields } from "../../../types/types";
import useModalStore from "../../../stores/modalStore";
import CreateNewTopicModal from "../../../ui-components/modals/CreateNewTopicModal";

export default function CalendarTopics() {
  const { isCreateNewTopicModalOpen, setIsCreateNewTopicModalOpen } =
    useModalStore();

    const [_calendarTopics, _setCalendarTopics] = useState<RP_Topics>()

    useEffect(() => {
      if(localStorage.getItem("calendarTopics") !== undefined) 
      _setCalendarTopics(JSON.parse(localStorage.getItem("calendarTopics")!))
    }, [localStorage.getItem("calendarTopics")])


    return (
    <>
      <Box
        height={"auto"}
        padding={"15px"}
        borderRadius={"5px"}
        flex={"4"}
        backgroundColor={rp.app.calendarTopics}
        minWidth={"35vw"}
        width={"auto"}
      >
        <RpTitle text={"Konu Başlıkları"} />

        <Button
          border={"none"}
          borderRadius={"5px"}
          backgroundColor={"#319795"}
          minWidth={"10vw"}
          width={"auto"}
          padding={"24px"}
          fontSize={"large"}
          fontWeight={500}
          color={"rgb(230, 224, 224)"}
          cursor={"pointer"}
          _hover={{ backgroundColor: "#2C7A7B" }}
          mb={"1rem"}
          onClick={() => setIsCreateNewTopicModalOpen(true)}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={"0.5rem"}>
            <FontAwesomeIcon icon={faPlus} />
            <Text>Yeni Konu Ekle</Text>
          </Flex>
        </Button>

        <Flex wrap={"wrap"} gap={"15px"}>
          {_calendarTopics?.topics?.map((topic, index) => {
            console.log("+")
            return <Topic
              key={index}
              topicId={topic.topicId}
              topicName={topic.topicName}
              topicDescription={topic.topicDescription}
              topicGoals={topic.topicGoals}
              topicSources={topic.topicSources}
              topicTodos={topic.topicTodos}
            />
        })}
        </Flex>
      </Box>
    </>
  );
}
