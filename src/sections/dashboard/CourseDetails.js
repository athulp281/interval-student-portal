import useResponsive from "@/components/Hooks/useResponsive";
import { Icon } from "@iconify/react";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
useResponsive;

const CourseDetails = () => {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");
  const { studentProfileData, loading } = useSelector(
    (state) => state.grievance
  );
  return (
    <Box>
      <Paper elevation={3} sx={{ padding: 2, borderRadius: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box padding={1}>
            <Typography variant="h6">Course Details...</Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Icon icon="hugeicons:folder-details" width="24" height="24" />
          </Box>
        </Box>

        <Stack direction={mdUp ? "row" : "column"} spacing={2}>
          <Paper
            sx={{
              padding: 2,
              borderRadius: 2,
              background: "linear-gradient(45deg, #770184, #01698e, black)", // Dark Blue (#00008B)
              color: "white",
              height: 200,
              width: "100%",
              borderRadius: 4,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  height: 40,
                  width: 40,
                  borderRadius: "50%",
                  background: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  color="black"
                  icon="hugeicons:course"
                  width="24"
                  height="24"
                />
              </Box>
              <Box pl={1}>
                <Typography>Opted Courses</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {studentProfileData?.courseDetails?.map((item, index) => {
                return (
                  <Box key={index}>
                    <Stack direction={"row"} spacing={2} key={index}>
                      <Box>
                        <Icon
                          icon="qlementine-icons:items-grid-16"
                          width="23"
                          height="23"
                        />
                      </Box>
                      <Box>
                        <Typography variant="h6">{item.courseName}</Typography>
                      </Box>
                    </Stack>

                    <Box
                      paddingLeft={4.8}
                      sx={{ display: "flex", flexDirection: "row" }}
                    >
                      <Typography>Session Count:</Typography>
                      <Typography pl={1}>{item.noOfSessions}</Typography>
                    </Box>
                    <Box paddingLeft={4.8}>
                      <Chip
                        sx={{ color: "white" }}
                        icon={
                          <Icon
                            color="white"
                            icon="pajamas:status"
                            width="16"
                            height="16"
                          />
                        }
                        size="small"
                        label={item.completionStatus}
                      />
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Paper>
          <Paper
            sx={{
              padding: 2,
              borderRadius: 2,
              background: "linear-gradient(45deg, #d00bc6, black, #01698e)",
              color: "white",
              height: 200,
              width: "100%",
              borderRadius: 4,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  height: 40,
                  width: 40,
                  borderRadius: "50%",
                  background: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  color="black"
                  icon="hugeicons:course"
                  width="24"
                  height="24"
                />
              </Box>
              <Box pl={1}>
                <Typography>Couse CRO & OGA Deatils</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Stack direction={"row"} spacing={1}>
                <Box>
                  <Icon icon="solar:user-broken" width="24" height="24" />
                </Box>
                <Box>
                  <Typography>CRO :-</Typography>
                </Box>
                <Box>
                  <Typography>Test test</Typography>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Stack direction={"row"} spacing={1}>
                <Box>
                  <Icon icon="solar:user-broken" width="24" height="24" />
                </Box>
                <Box>
                  <Typography>OGA :-</Typography>
                </Box>
                <Box>
                  <Typography>Test test</Typography>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Stack>
      </Paper>
    </Box>
  );
};

export default CourseDetails;
