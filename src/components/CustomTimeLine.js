import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import MotionWrapper from "./MotionWrapper";

const data = [
  {
    performedBy: null,
    performedTo: null,
    comments: null,
    status: "Created",
    time: "2024-12-26 07:01:15",
  },
  {
    performedBy: null,
    performedTo: null,
    comments: null,
    status: "Updated",
    time: "2024-12-26 11:35:57",
  },
  {
    performedBy: "system",
    performedTo: "Technical Department",
    status: "Assigned to Department",
    comments: "auto assigned by system",
    time: "2024-12-26 07:01:15",
  },
  {
    performedBy: "SHAHIDA P A",
    performedTo: "Not Assigned",
    status: "Assigned to User",
    comments: "pleasse do fast subhin",
    time: "2024-12-26 14:39:59",
  },
  {
    performedBy: "SHAHIDA P A",
    performedTo: "Technical Department",
    status: "Assigned to User",
    comments: "please do fast subhin this is urgent",
    time: "2024-12-26 14:44:00",
  },
  {
    performedBy: "SHAHIDA P A",
    performedTo: "Technical Department",
    status: "Assigned to User",
    comments: "jplserasdrt",
    time: "2024-12-26 14:51:57",
  },
  {
    performedBy: "Test OGA 1",
    performedTo: "Technical Department",
    status: "Assigned to User",
    comments: "This is for u baby",
    time: "2024-12-26 14:59:44",
  },
  {
    performedBy: "Test OGA 1",
    performedTo: "Technical Department",
    status: "Assigned to User",
    comments: "This is for u baby",
    time: "2024-12-26 15:00:37",
  },
  {
    performedBy: "SHAHIDA P A",
    performedTo: "Technical Department",
    status: "Assigned to User",
    comments: "please fast do subhin",
    time: "2024-12-26 15:08:08",
  },
  {
    performedBy: "SHAHIDA P A",
    performedTo: "Project-Foundation",
    status: "Assigned to Department",
    comments: "re assigned to anothr dept",
    time: "2024-12-26 15:29:08",
  },
  {
    performedBy: "SHAHIDA P A",
    performedTo: "Project-Foundation",
    status: "Assigned to Department",
    comments: "",
    time: "2024-12-26 15:33:37",
  },
  {
    performedBy: "SHAHIDA P A",
    performedTo: "Project-Foundation",
    status: "Assigned to Department",
    comments: "",
    time: "2024-12-26 15:34:47",
  },
  {
    performedBy: "SHAHIDA P A",
    performedTo: "Project-Foundation",
    status: "Assigned to Department",
    comments: "updated",
    time: "2024-12-26 15:36:03",
  },
  {
    performedBy: "SHAHIDA P A",
    performedTo: "Project-Foundation",
    status: "Assigned to Department",
    comments: "updated",
    time: "2024-12-26 15:36:31",
  },
  {
    performedBy: "SHAHIDA P A",
    performedTo: "Technical Department",
    status: "Assigned to Department",
    comments: "re assigned to dept",
    time: "2024-12-26 15:38:18",
  },
  {
    performedBy: "SHAHIDA P A",
    performedTo: "Technical Department",
    status: "Assigned to Department",
    comments: "",
    time: "2024-12-26 15:57:42",
  },
  {
    performedBy: "SHAHIDA P A",
    performedTo: "Technical Department",
    status: "Commented",
    comments: "haui",
    time: "2024-12-26 17:06:00",
  },
  {
    performedBy: "SHAHIDA P A",
    performedTo: "Technical Department",
    status: "Commented",
    comments: "are you done",
    time: "2024-12-27 10:02:43",
  },
];

const CustomTimeLine = () => {
  return (
    <Box>
      <Timeline position="alternate">
        {data.map((item, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <MotionWrapper directions={"bottom"} delay={index + 1}>
                  <Paper
                    sx={{
                      background: `linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)`,
                      borderRadius: 3,
                      height: 150,
                    }}
                  >
                    <Box padding={1}>
                      <Stack direction={"row"} spacing={2}>
                        <Avatar
                          sx={{ border: 3, borderColor: "white" }}
                          alt="Remy Sharp"
                          src="https://www.granitenet.com/wp-content/uploads/2023/11/Benefits-CustomerService-Photo.jpg"
                        />
                        <Box pt={1}>
                          <Typography sx={{ color: "white " }}>
                            Stage {index + 1}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Paper>
                </MotionWrapper>
              </TimelineContent>
            </TimelineItem>
          );
        })}

        {/* <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem> */}
      </Timeline>
    </Box>
  );
};

export default CustomTimeLine;
