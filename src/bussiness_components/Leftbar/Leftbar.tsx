import { Box, Flex } from "@chakra-ui/react";
import { rp } from "../../../public/colors/colors";
import Templates from "./Templates";
import PlanDirectory from "./PlanDirectorySection";
import Profile from "./Profile";
import useLeftbarStore from "../../stores/leftbarStore";
import Logo from "./Logo";
import LeftbarToggle from "../../elements/LeftbarToggle";
import React from "react";

export default function Leftbar() {
  const { isCollapsed, toggleIsCollapsed } = useLeftbarStore();
    return (
      <Box
        boxSizing={"border-box"}
        height={"100vh"}
        position={"fixed"}
      >
        <LeftbarToggle
          isCollapsed={isCollapsed}
          toggleIsCollapsed={toggleIsCollapsed}
        />
        {isCollapsed ? (
          <></>
        ) : (
          <Box
            boxSizing={"border-box"}
            height={"100vh"}
            width={"300px"}
            padding={"25px 15px"}
            backgroundColor={rp.app.leftbarBg}
          >
            <Logo />
            <Flex
              color={rp.app.textSoft}
              fontWeight={300}
              direction={"column"}
              gap={"15px"}
            >
              <Templates />
              <PlanDirectory />
              <Profile />
            </Flex>
          </Box>
        )}
      </Box>
    );  
  }

