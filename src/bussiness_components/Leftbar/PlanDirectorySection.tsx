import { Box, Flex, Text } from "@chakra-ui/react";
import { faChartBar, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rp } from "../../../public/colors/colors";
import {
  faFolderOpen,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { plans } from "../../assets/mockData";
import { useState } from "react";
import React from "react";

export default function PlanDirectory() {
  const [folderStates, setFolderStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  function createDirectory() {
    const newFolderName = "New Folder";
    setFolderStates((prevState) => ({
      ...prevState,
      [newFolderName]: false,
    }));
  }

  function toggleFolderState(folderName: string) {
    setFolderStates((prevState) => ({
      ...prevState,
      [folderName]: !prevState[folderName],
    }));
  }

  console.log(plans);

  return (
    <Flex
      direction={"column"}
      p={"0px 10px"}
      fontSize={"17px"}
      backgroundColor={rp.app.leftbarItemsBg}
      borderRadius={"5px"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        // mb={"10px"}
        padding={"0px 5px"}
      >
        <Flex alignItems={"center"} gap={"12px"} fontWeight={400}>
          <FontAwesomeIcon icon={faChartBar}/>
          <Text fontSize={"18px"}>
            Plans
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={"12px"}>
          <FontAwesomeIcon
            icon={faFolderPlus}
            color={rp.app.folder}
            cursor={"pointer"}
            onClick={createDirectory}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            color={rp.app.folder}
            cursor={"pointer"}
          />
        </Flex>
      </Flex>
      {/* FOLDERS AND FILES */}
      <Box
        // minHeight={"75px"}
        // height={"auto"}
        // maxHeight={"200px"}
        height={"60vh"}
        backgroundColor={rp.app.folderBg}
        padding={"0px 10px"}
        borderRadius={"5px"}
        overflowY={"auto"}
      >
        <Flex direction={"column"} fontSize={"1rem"} pl={"12px"} >
          {plans?.directories?.map((directory, index) => (
            <Flex direction={"column"}>
              <Flex
                key={index}
                alignItems={"center"}
                gap={"8px"}
                fontSize={"17px"}
                onClick={() => toggleFolderState(directory.dirName)}
              >
                {folderStates[directory?.dirName] ? (
                  <FontAwesomeIcon cursor={"pointer"} icon={faFolderOpen} />
                ) : (
                  <FontAwesomeIcon
                    cursor={"pointer"}
                    icon={faFolder}
                    color={rp.app.folder}
                  />
                )}
                <Text fontWeight={400} lineHeight={"0"} cursor={"pointer"}>
                  {directory.dirName}
                </Text>
              </Flex>
              {directory.files.length > 0 && folderStates[directory.dirName] ? (
                <Flex pl={"25px"}>
                  {directory.files.map((file) => (
                    <Flex
                      alignItems={"center"}
                      gap={"8px"}
                      cursor={"pointer"}
                      color={rp.app.file}
                    >
                      <FontAwesomeIcon icon={faFile} cursor={"pointer"} />
                      <Text fontWeight={400} lineHeight={"0"} cursor={"pointer"}>
                        {file.fileName}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              ) : folderStates[directory.dirName] ? (
                <Text pl={"10px"} color={rp.app.textExtraSoft}>
                  There is no file.
                </Text>
              ) : (
                <></>
              )}
            </Flex>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
