import { Box, Typography } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import NavigationButton from "./NavigationButton";
import LogoHeader from "./LogoHeader";
import { ReactTyped } from "react-typed";

// Define animations with different directions and a 5-second delay before starting
const boxVariants = {
  left: {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 },
    },
  },
  right: {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.6 },
    },
  },
  top: {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.8 },
    },
  },
  bottom: {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 1 },
    },
  },
};

const LeftSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 4,
        paddingLeft: 10,
      }}
    >
      <Box>
        {/* Logo Header Animation - From Left */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={boxVariants.left}
        >
          <Box>
            <LogoHeader />
          </Box>
        </motion.div>

        {/* Main Typography Animation - From Right */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={boxVariants.right}
        >
          <Box>
            <Typography
              sx={{ fontFamily: "Space Grotesk, serif", fontSize: 60 }}
            >
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
        </motion.div>

        {/* Placeholder Text Animation - From Top */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={boxVariants.top}
        >
          <Box>
            <Typography>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without
            </Typography>
          </Box>
        </motion.div>

        {/* Navigation Button Animation - From Bottom */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={boxVariants.bottom}
        >
          <Box mt={2}>
            <NavigationButton />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default LeftSection;
