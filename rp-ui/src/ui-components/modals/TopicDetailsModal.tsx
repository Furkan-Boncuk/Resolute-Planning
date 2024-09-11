import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Flex,
  Text,
  Box,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import useModalStore from "../../stores/modalStore";
import { rp } from "../../../public/colors/colors";
import RpTitle from "../rpComponents/RpTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { RP_Topics } from "../../types/types";

const TopicDetailsModal = () => {
  const {
    isTopicDetailsModalOpen,
    setIsTopicDetailsModalOpen,
    selectedTopicId,
  } = useModalStore();

  const calendarTopics: RP_Topics = JSON.parse(localStorage.getItem("calendarTopics")!)

  const topic = calendarTopics?.topics?.find(
    (topic) => topic.topicId === selectedTopicId
  );

  console.log("açıldı");

  const sourcesHTMLText =
    topic && !topic?.topicSources! ? (
      <i>Henüz bir açıklama girilmedi</i>
    ) : (
      topic?.topicSources!
    );

  function deleteTopic() {    
    const newCalendarTopic = calendarTopics?.topics?.filter(
      (topic) => topic.topicId !== selectedTopicId
    );

    console.log(newCalendarTopic)

    localStorage.setItem("calendarTopics", JSON.stringify(newCalendarTopic))

    console.log(JSON.parse(localStorage.getItem("calendarTopics")!))

    setIsTopicDetailsModalOpen(null)
  }

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isTopicDetailsModalOpen}
        onClose={() => setIsTopicDetailsModalOpen(null)}
      >
        <ModalOverlay backgroundColor={"rgba(0, 0, 0, 0.66)"} />
        <ModalContent
          minWidth={"650px"}
          backgroundColor={rp.app.leftbarBg}
          color={rp.app.textSoft}
          maxHeight={"90vh"}
          top={-30}
        >
          <ModalHeader pb={"0"}>
            {topic?.topicName ? (
              <Flex alignItems={"center"} gap={"1rem"}>
                <FontAwesomeIcon
                  color={rp.app.topic.redTag}
                  fontSize={"1.5rem"}
                  icon={faTag}
                />
                <RpTitle fontSize={"20px"} text={topic?.topicName} />
              </Flex>
            ) : (
              <></>
            )}
          </ModalHeader>

          <ModalCloseButton
            onClick={() => setIsTopicDetailsModalOpen(null)}
            backgroundColor={rp.app.closeButton}
            _hover={{ backgroundColor: "red.500", color: "white" }}
          />
          <ModalBody height={"80%"} overflowY={"auto"}>
            <Flex direction={"column"} gap={"1rem"}>
              <Flex direction={"column"} gap={"0.5rem"}>
                <RpTitle text="Açıklama" />
                <Box
                  padding={"10px"}
                  backgroundColor={rp.app.border}
                  borderRadius={"5px"}
                >
                  <Text
                    fontSize={"medium"}
                    lineHeight={"normal"}
                    maxHeight={"150px"}
                    overflowY={"auto"}
                  >
                    {!topic?.topicDescription ||
                    topic?.topicDescription.trim().length === 0 ? (
                      <i>Henüz bir açıklama girilmedi</i>
                    ) : (
                      topic?.topicDescription
                    )}
                  </Text>
                </Box>
              </Flex>

              <Flex direction={"column"} gap={"0.5rem"}>
                <RpTitle text="Hedefler" />
                <Box
                  padding={"10px"}
                  backgroundColor={rp.app.border}
                  borderRadius={"5px"}
                >
                  <Text
                    fontSize={"medium"}
                    lineHeight={"normal"}
                    maxHeight={"150px"}
                    overflowY={"auto"}
                  >
                    {!topic?.topicGoals ||
                    topic?.topicGoals.trim().length === 0 ? (
                      <i>Henüz bir açıklama girilmedi</i>
                    ) : (
                      topic?.topicGoals
                    )}
                  </Text>
                </Box>
              </Flex>

              <Flex direction={"column"} gap={"0.5rem"}>
                <RpTitle text="Kaynaklar" />
                <Box
                  padding={"10px"}
                  backgroundColor={rp.app.border}
                  borderRadius={"5px"}
                >
                  <Text
                    fontSize={"medium"}
                    lineHeight={"normal"}
                    maxHeight={"150px"}
                    overflowY={"auto"}
                    dangerouslySetInnerHTML={{__html:  <Link
                      color={"blueviolet"}
                      href={
                        topic?.topicSources?.props?.dangerouslySetInnerHTML
                          .__html
                      }
                    >
                      {
                        topic?.topicSources?.props?.dangerouslySetInnerHTML
                          .__html
                      }
                    </Link>}}
                  />
                </Box>
              </Flex>

              <Flex direction={"column"} gap={"0.5rem"}>
                <RpTitle text="Yapılacaklar" />
                <Box
                  padding={"10px"}
                  backgroundColor={rp.app.border}
                  borderRadius={"5px"}
                >
                  {topic?.topicTodos.map((todo, index) => (
                    <Flex alignItems={"center"} gap={"0.5rem"} key={index}>
                      <Checkbox alignSelf={"flex-start"} mt={"5px"} />
                      <Text
                        fontSize={"medium"}
                        lineHeight={"normal"}
                        maxHeight={"150px"}
                        overflowY={"auto"}
                      >
                        {todo.todoTitle}
                      </Text>
                    </Flex>
                  ))}
                </Box>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter justifyContent={"space-between"}>
            <Button
              mr={3}
              onClick={deleteTopic}
              backgroundColor={rp.app.closeButton}
              color={rp.app.textSoft}
              _hover={{ backgroundColor: "red.500" }}
            >
              Konuyu Sil
            </Button>
            <Button
              colorScheme="black"
              mr={3}
              onClick={() => setIsTopicDetailsModalOpen(null)}
            >
              İptal Et
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => setIsTopicDetailsModalOpen(null)}
            >
              Değişiklikleri Kaydet
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TopicDetailsModal;
