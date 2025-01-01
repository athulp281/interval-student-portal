import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import MotionWrapper from "./MotionWrapper";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import MainLoader from "./MainLoader";
const CustomTimeLine = () => {
  const { grievanceJourneyData, loading } = useSelector(
    (state) => state.grievance
  );
  return (
    <Box>
      {loading ? (
        <MainLoader />
      ) : (
        <Timeline position="alternate">
          {grievanceJourneyData?.map((item, index) => {
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
                        // height: 150,
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
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                          pb: 2,
                        }}
                      >
                        <Box>
                          <Chip
                            size="small"
                            variant="outlined"
                            icon={
                              <Icon
                                color="white"
                                icon="stash:people-group-duotone"
                                width="24"
                                height="24"
                              />
                            }
                            sx={{ color: "white" }}
                            label={item.performedBy}
                          />
                        </Box>
                        <Typography sx={{ color: "white" }}>
                          {item.performedTo}
                        </Typography>
                        <Typography>{item.status}</Typography>
                      </Box>
                    </Paper>
                  </MotionWrapper>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      )}

      <Box>
        <Divider sx={{ borderStyle: "dashed" }}>
          <Icon icon="emojione-v1:end-arrow" width="25" height="35" />
        </Divider>
      </Box>
    </Box>
  );
};

export default CustomTimeLine;
