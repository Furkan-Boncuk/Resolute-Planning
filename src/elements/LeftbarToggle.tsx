import { Box, Tooltip } from "@chakra-ui/react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LeftbarComponentProps } from "../bussiness_components/Leftbar/LeftbarProps.interface";
import { rp } from "../../public/colors/colors";
import React from "react";

export default function LeftbarToggle({
  isCollapsed,
  toggleIsCollapsed,
}: LeftbarComponentProps) {
  return (
    <Tooltip
      hasArrow
      placement={"right-start"}
      label={`${isCollapsed ? "Expand leftbar" : "Collapse leftbar"}`}
      backgroundColor={rp.app.toolbarBg}
      padding={"5px"}
      borderRadius={"5px"}
      pt={"8px"}
    >
      <Box
        position={"absolute"}
        top={"50%"}
        left={"96%"}
        padding={"5px"}
        borderRadius={"3px"}
        backgroundColor={rp.app.leftbarItemsBg}
        _hover={{ backgroundColor: rp._hover.leftbarToggle }}
        border={`1px solid ${rp.app.border}`}
        onClick={toggleIsCollapsed}
        cursor={"pointer"}
      >
        <FontAwesomeIcon
          fontSize={"24px"}
          fontWeight={100}
          icon={isCollapsed ? faChevronRight : faChevronLeft}
          color={rp.app.textSoft}
        />
      </Box>
    </Tooltip>
  );
}
