import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Box,
  Button,
  Flex,
  Input,
  Text,
  FormLabel,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";
import { rp } from "../../../public/colors/colors";
import React, { useEffect, useState } from "react";
import useModalStore from "../../stores/modalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { RP_Topics } from "../../types/types";

export default function CreateNewTopicModal() {
  const calendarTopics: RP_Topics = JSON.parse(localStorage.getItem("calendarTopics")!)

  const { isCreateNewTopicModalOpen, setIsCreateNewTopicModalOpen } =
    useModalStore();

  // STATES
  const [topicNameInputVal, setTopicNameInputVal] = useState("");
  const [topicDescriptionInputVal, setTopicDescriptionInputVal] = useState("");
  const [topicGoalInputVal, setTopicGoalInputVal] = useState("");
  const [topicSourcesInputVal, setTopicSourcesInputVal] = useState("");
  const [topicTodosInputVal, setTopicTodosInputVal] = useState("");

  // VALIDATIONS
  function onTopicNameInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTopicNameInputVal(event.target.value);
  }

  function onTopicDescriptionInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setTopicDescriptionInputVal(event.target.value);
  }

  function onTopicGoalInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setTopicGoalInputVal(event.target.value);
  }

  function onTopicSourcesInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setTopicSourcesInputVal(event.target.value);
  }

  function onTopicTodosInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTopicTodosInputVal(event.target.value);
  }

  // ERRORS
  const isErrorInTopicNameInput = topicNameInputVal.trim().length < 1;

  // TOUCHED
  const [isTopicNameTouched, setIsTopicNameTouched] = useState(false);

  // ISFILLED -> helpertext leri kaldırmak için.
  const isTopicNameFilled = topicNameInputVal.length > 0;
  const isTopicDescriptionFilled = topicDescriptionInputVal.length > 0;
  const isTopicGoalFilled = topicGoalInputVal.length > 0;
  const isTopicSourcesFilled = topicSourcesInputVal.length > 0;
  const isTopicTodosFilled = topicTodosInputVal.length > 0;

  // BUTTON DISABLED
  const isTopicTodosButtonDisabled = topicTodosInputVal.trim().length < 1;
  const isSubmitButtonDisabled = isErrorInTopicNameInput;

  // METHODS
  //let topicTodos: { todoTitle: string; isDone: boolean }[] = [];
  const [topicTodos, setTopicTodos] = useState<
    { todoTitle: string; isDone: boolean }[] | []
  >([]);

  function addNewTopicTodo() {
    const arr = [...topicTodos];
    arr.push({ todoTitle: topicTodosInputVal, isDone: false });
    console.log(arr);
    setTopicTodos(arr);
    setTopicTodosInputVal("");
  }

  function deleteTopicTodo(todoTitle: string) {
    const arr = topicTodos.filter((todo) => todo.todoTitle !== todoTitle);
    console.log(arr);
    setTopicTodos(arr);
    setTopicTodosInputVal("");
  }

  // CREATE NEW TOPIC = SUBMIT
  function createNewTopic() {
    const newTopic = {
      topicId: (Math.random()*1000).toString(),
      topicName: topicNameInputVal,
      topicDescription: topicDescriptionInputVal,
      topicGoals: topicGoalInputVal,
      topicSources: linkedText,
      topicTodos: topicTodos,
    };

    calendarTopics?.topics.push(newTopic);

    localStorage.setItem("calendarTopics", JSON.stringify(calendarTopics));

    setIsCreateNewTopicModalOpen(false);
  }

  const [linkedText, setLinkedText] = useState<JSX.Element | undefined>(
    undefined
  );

  console.log(linkedText);

  const sources = document.getElementById("topicSourcesInput")!;

  useEffect(() => {
    const expression =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const link_regex = new RegExp(expression);
    console.log(link_regex);

    function saveSelection() {
      console.log("metoda girdi");
      console.log(window.getSelection()?.toString());
      const condition =
        sources && window.getSelection()?.toString().match(link_regex);
      console.log(condition);
      if (condition) {
        setLinkedText(
          <a dangerouslySetInnerHTML={{ __html: window.getSelection()?.toString()! }} />
        );
            } else {
        setLinkedText(undefined);
      }
    }

    sources?.addEventListener("mouseup", saveSelection);

    return () => document.removeEventListener("mouseup", saveSelection);
  }, [window.getSelection(), sources]);

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isCreateNewTopicModalOpen}
        onClose={() => setIsCreateNewTopicModalOpen(false)}
      >
        <ModalOverlay backgroundColor={"rgba(0, 0, 0, 0.66)"} />
        <ModalContent
          backgroundColor={rp.app.leftbarBg}
          color={rp.app.textSoft}
          minWidth={"550px"}
          maxHeight={"90vh"}
          top={-30}
        >
          <ModalHeader>Yeni Konu Başlığı Oluştur</ModalHeader>
          <ModalCloseButton
            onClick={() => setIsCreateNewTopicModalOpen(false)}
            backgroundColor={rp.app.closeButton}
            _hover={{ backgroundColor: "red.500", color: "white" }}
          />
          <ModalBody height={"80%"} overflowY={"auto"}>
            <Flex direction={"column"} gap={"1rem"}>
              <FormControl
                isInvalid={isErrorInTopicNameInput && isTopicNameTouched}
              >
                <Flex direction={"column"} gap={"0.25rem"}>
                  <FormLabel htmlFor="topicNameInput">🏷️ Konu</FormLabel>
                  <Input
                    id="topicNameInput"
                    type="text"
                    value={topicNameInputVal}
                    fontSize={"medium"}
                    onChange={(event) => onTopicNameInputChange(event)}
                    autoFocus={true}
                    onClick={() => setIsTopicNameTouched(true)}
                  />
                  {isErrorInTopicNameInput && isTopicNameTouched ? (
                    <FormErrorMessage>
                      Konu başlığını girmeniz gereklidir 😊
                    </FormErrorMessage>
                  ) : isTopicNameFilled ? (
                    <></>
                  ) : (
                    <FormHelperText color={rp.app.textExtraSoft}>
                      Bu ay içerisinde ilerleme katetmek istediğiniz konuyu
                      girin 🚀
                    </FormHelperText>
                  )}
                </Flex>
              </FormControl>

              <FormControl>
                <Flex direction={"column"} gap={"0.25rem"}>
                  <FormLabel htmlFor="topicDescriptionInput">
                    📋 Açıklama
                  </FormLabel>
                  <Textarea
                    id="topicDescriptionInput"
                    value={topicDescriptionInputVal}
                    fontSize={"medium"}
                    onChange={(event) => onTopicDescriptionInputChange(event)}
                    resize={"none"}
                    rows={4}
                  />
                  {!isTopicDescriptionFilled ? (
                    <FormHelperText color={rp.app.textExtraSoft}>
                      Konu hakkında kısa bir açıklama girebilirsiniz. Daha
                      sonrasında konuyu incelerken amacınızı hatırlamanıza
                      yardımcı olur, doldurulması zorunlu değildir
                    </FormHelperText>
                  ) : (
                    <></>
                  )}
                </Flex>
              </FormControl>

              <FormControl>
                <Flex direction={"column"} gap={"0.25rem"}>
                  <FormLabel htmlFor="topicGoalInput">🎯 Hedefler</FormLabel>
                  <Textarea
                    id="topicGoalInput"
                    value={topicGoalInputVal}
                    fontSize={"medium"}
                    onChange={(event) => onTopicGoalInputChange(event)}
                    resize={"none"}
                    rows={4}
                  />
                  {!isTopicGoalFilled ? (
                    <FormHelperText color={rp.app.textExtraSoft}>
                      Bu konudaki hedeflerinizi girin, doldurulması zorunlu bir
                      alan değildir.
                    </FormHelperText>
                  ) : (
                    <></>
                  )}
                </Flex>
              </FormControl>

              <FormControl>
                <Flex direction={"column"} gap={"0.25rem"}>
                  <FormLabel htmlFor="topicSourcesInput">
                    🔗 Kaynaklar
                  </FormLabel>
                  <Textarea
                    id="topicSourcesInput"
                    value={topicSourcesInputVal}
                    fontSize={"medium"}
                    onChange={(event) => onTopicSourcesInputChange(event)}
                    resize={"none"}
                    rows={4}
                    onContextMenu={(event) => {
                      event.preventDefault();
                      console.log("right click olduu");
                    }}
                  />
                  {!isTopicSourcesFilled ? (
                    <FormHelperText color={rp.app.textExtraSoft}>
                      Bu konu ile ilgili daha sonra erişmek isteyebileceğiniz
                      kaynakları buraya kaydedebilirsiniz, doldurulması zorunlu
                      değildir.
                    </FormHelperText>
                  ) : (
                    <></>
                  )}
                </Flex>
              </FormControl>

              <FormControl>
                <Flex direction={"column"} gap={"0.25rem"}>
                  <FormLabel htmlFor="topicTodosInput">
                    ✅ Yapılacaklar
                  </FormLabel>
                  <Flex gap={"0.5rem"}>
                    <Input
                      id="topicTodosInput"
                      value={topicTodosInputVal}
                      fontSize={"medium"}
                      onChange={(event) => onTopicTodosInputChange(event)}
                      resize={"none"}
                    />
                    <Button
                      color={"whitesmoke"}
                      backgroundColor={"teal.300"}
                      _hover={{ backgroundColor: "teal.500" }}
                      onClick={addNewTopicTodo}
                      isDisabled={isTopicTodosButtonDisabled}
                    >
                      Ekle
                    </Button>
                  </Flex>
                  {!isTopicTodosFilled ? (
                    <FormHelperText color={rp.app.textExtraSoft}>
                      Bu konu ile ilgili yapılacaklar listenizi
                      oluşturabilirsiniz. Yapılması gereken görevi yazıp 'Ekle'
                      butonuna tıklamanız yeterlidir. Buraya girilen görevler
                      Yapılacaklar kısmında görünecektir, doldurulması zorunlu
                      değildir.
                    </FormHelperText>
                  ) : (
                    <></>
                  )}
                  {topicTodos.map((todo, index) => {
                    console.log(todo);
                    return (
                      <Flex
                        key={index}
                        alignItems={"center"}
                        margin={"0.25rem 0"}
                        justifyContent={"space-between"}
                        padding={"0.5rem 5px"}
                        borderRadius={"5px"}
                        backgroundColor={rp.app.border}
                      >
                        <Flex gap={"0.5rem"}>
                          <Checkbox
                            isDisabled={true}
                            alignSelf={"flex-start"}
                            mt={"0.25rem"}
                          />
                          <Text fontSize={"1rem"} lineHeight={"normal"}>
                            {todo.todoTitle}
                          </Text>
                        </Flex>
                        <Box
                          cursor={"pointer"}
                          onClick={() => deleteTopicTodo(todo.todoTitle)}
                        >
                          <FontAwesomeIcon
                            icon={faCircleXmark}
                            color={rp.app.icons.circleX}
                          />
                        </Box>
                      </Flex>
                    );
                  })}
                </Flex>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              isDisabled={isSubmitButtonDisabled}
              onClick={createNewTopic}
            >
              Konu Oluştur
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
