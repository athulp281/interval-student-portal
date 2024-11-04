"use client";
import React from "react";
import LeftSection from "./LeftSection";
import { Box, Stack } from "@mui/material";
import RightSection from "./RightSection";
import LogoLoader from "@/components/LogoLeader";

const LandingPage = () => {
  return (
    <div>
      <LogoLoader />
      hello
      {/* <Stack direction={"row"} spacing={2}>
        <Box width={"60%"}>
          <LeftSection />
        </Box>
        <Box sx={{ width: "40%" }}>
          <RightSection />
        </Box>
      </Stack> */}
    </div>
  );
};

export default LandingPage;
