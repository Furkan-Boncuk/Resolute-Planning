import { Box, Flex } from "@chakra-ui/react";
import Calendar from "../Calendar/Calendar";
import DailyTodos from "../DailyTodos/DailyTodos";
import React from "react";
import Notes from "../Notes/Notes";
import CalendarTopics from "../Topics/CalendarTopics";

export default function CalendarPlanTemplate() {
    return (
        <Box padding={"20px 100px"} >
            <Flex direction={"column"} gap={"10px"}>
                <Flex direction={"row"} gap={"10px"}>
                    <Calendar />
                    <CalendarTopics />
                </Flex>
                <DailyTodos />
                {/* HEDEFLER */}
                {/* TÜM TODO LAR */}
                {/* KAYNAKLAR */}
                {/* KONU BAŞLIĞI AÇIKLAMALARI */}
                {/* ÖNEMLİ GÜNLER */}
                <Notes />
            </Flex>
        </Box>
    );
}
