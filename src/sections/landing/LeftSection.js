import { Box, Typography } from "@mui/material";
import React from "react";
import NavigationButton from "./NavigationButton";
import GlassPaper from "./GlassPaper";
import LogoHeader from "./LogoHeader";
import dynamic from "next/dynamic";
import { ReactTyped } from "react-typed";

const LeftSection = () => {
  return (
    <Box
      sx={{
        // width: "50%",
        display: "flex",
        justifyContent: "center",
        marginTop: 4,
        paddingLeft: 10,
      }}
    >
      <Box>
        <Box>
          <LogoHeader />
        </Box>
        <Box>
          <Typography sx={{ fontFamily: "Space Grotesk, serif", fontSize: 60 }}>
            Transforming <br />
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Education
            </Box>
            , <br />
            <ReactTyped
              strings={[
                "Empowering you.",
                "Unleashing Brilliance.",
                "Igniting Potential.",
              ]}
              typeSpeed={30}
              backSpeed={20}
              loop
            />
          </Typography>
        </Box>
        <Box>
          <Typography>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without
          </Typography>
        </Box>
        <Box mt={2}>
          <NavigationButton />
        </Box>
        {/* <Box mt={2}>
          <GlassPaper />
        </Box> */}
      </Box>
    </Box>
  );
};

export default LeftSection;
