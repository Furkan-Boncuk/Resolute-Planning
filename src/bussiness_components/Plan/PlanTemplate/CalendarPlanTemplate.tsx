import { Box, Flex } from "@chakra-ui/react";
import Calendar from "../Calendar/Calendar";
import CalendarNotesImportantTopics from "../ImportantTopics/CalendarNotesImportantTopics";
import NotesRelatedToTheCalendar from "../Notes/NotesRelatedToTheCalendar";
import DailyTodos from "../DailyTodos/DailyTodos";
import React from "react";

export default function CalendarPlanTemplate() {
    return (
        <Box padding={"20px 100px"} >
            <Flex direction={"column"} gap={"10px"}>
                <Flex direction={"row"} gap={"10px"}>
                    <Calendar />
                    <CalendarNotesImportantTopics />
                </Flex>
                <NotesRelatedToTheCalendar />
                <DailyTodos />
            </Flex>
        </Box>
    );
}
