import { Box } from "@chakra-ui/react";
import { rp } from "../../../public/colors/colors";
import React from "react";

export default function NotesRelatedToTheCalendar() {
  return (
    <Box
      height={"500px"}
      padding={"15px"}
      borderRadius={"5px"}
      backgroundColor={rp.app.notesRelatedToTheCalendar}
    >
      Notes Related To The Calendar
    </Box>
  );
}
