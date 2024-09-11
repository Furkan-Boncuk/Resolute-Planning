import React from "react";
import "./App.css";
import Leftbar from "./bussiness_components/Leftbar/Leftbar";
import Plan from "./bussiness_components/Plan/Plan";
import { Flex } from "@chakra-ui/react";
import CreateNewTopicModal from "./ui-components/modals/CreateNewTopicModal";
import TopicDetailsModal from "./ui-components/modals/TopicDetailsModal";
import useModalStore from "./stores/modalStore";

function App() {
  const {
    isCreateNewTopicModalOpen,
    isTopicDetailsModalOpen,
    selectedTopicId,
  } = useModalStore();
  return (
    <>
      {isCreateNewTopicModalOpen ? <CreateNewTopicModal /> : <></>}
      {isTopicDetailsModalOpen && selectedTopicId !== null ? (
        <TopicDetailsModal />
      ) : (
        <></>
      )}

      <Flex direction={"row"}>
        <Leftbar />
        <Plan />
      </Flex>
    </>
  );
}

export default App;
