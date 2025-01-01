import { Box, Paper, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RecentGrievance = () => {
  const { allGrievancedata, loading } = useSelector((state) => state.grievance);
  return (
    <Box sx={{ pt: 2 }}>
      <Paper elevation={2} sx={{ borderRadius: 3 }}>
        <Box sx={{ padding: 1 }}>
          <Typography variant="h6">Recently Added Grievance</Typography>
        </Box>
        <Box>
          {allGrievancedata?.map((item, index) => {
            if (index == 1) {
              return (
                <Box
                  key={index}
                  padding={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Stack direction={"row"} spacing={2}>
                    <Box>{item.courseName} </Box>
                    <Box>{dayjs(item.date).format("YYYY-MM-Dd")}</Box>
                    <Box>{item.status}</Box>
                  </Stack>
                </Box>
              );
            }
          })}
          <Box></Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default RecentGrievance;
