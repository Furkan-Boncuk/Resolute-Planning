import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import {
  faCircleInfo,
  faCircleXmark,
  faPen,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rp } from "../../../../public/colors/colors";
import React, { useState } from "react";
import useModalStore from "../../../stores/modalStore";
import "./animation.css";
import TopicDetailsModal from "../../../ui-components/modals/TopicDetailsModal";
import { RP_Topics, TopicFields } from "../../../types/types";

export default function Topic({
  topicId,
  topicName,
  topicDescription,
  topicGoals,
  topicSources,
  topicTodos,
}: TopicFields) {
  // const [hoverTopic, setHoverTopic] = useState(false);
  const { setIsTopicDetailsModalOpen } = useModalStore();

  return (
    <>
      <Flex
        alignItems={"center"}
        padding={"14px"}
        justifyContent={"space-between"}
        gap={"8px"}
        backgroundColor={rp.app.calendarTopicsBg}
        borderRadius={"5px"}
        // onMouseEnter={() => setHoverTopic(true)}
        // onMouseLeave={() => setHoverTopic(false)}
        transition="500ms width"
        cursor={"pointer"}
        onClick={() => setIsTopicDetailsModalOpen(topicId)}
        _hover={{backgroundColor: rp._hover.calendarTopicsBg}}
      >
        <Flex alignItems={"center"} gap={"8px"}>
          <FontAwesomeIcon icon={faTag} color={rp.app.topic.redTag} fontSize={"22px"} />
          <Text fontSize={"17px"}>{topicName}</Text>
          {/* {hoverTopic ? (
            <Box
              style={{
                opacity: hoverTopic ? 1 : 0,
                animation: hoverTopic
                  ? "fadeIn 0.5s ease-in-out forwards"
                  : "fadeOut 0.5s ease-in-out forwards",
              }}
            >
              <FontAwesomeIcon
                icon={faCircleXmark}
                cursor={"pointer"}
                color={rp.app.icons.circleX}
              />
            </Box>
          ) : (
            <></>
          )} */}
        </Flex>
      </Flex>
    </>
  );
}
