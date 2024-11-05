import ImageSlider from "@/components/ImageSlider";
import { Box, Paper } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const RightSection = () => {
  const boxVariants = {
    top: {
      initial: { y: -100, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut", delay: 1 },
      },
    },
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Vertical door animations */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50vh",
          backgroundColor: "#ffffff",
          zIndex: 2,
        }}
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50vh",
          backgroundColor: "#ffffff",
          zIndex: 2,
        }}
      />

      {/* Main content that appears after door animation */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={boxVariants.top}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Box sx={{ mr: 3 }}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 5,
              borderTopLeftRadius: 180,
              mt: 2,
              background: `linear-gradient(to right, #F4F6FF 0%, #F4F6FF 10%, #b85fd3 100%)`,
            }}
          >
            <Box sx={{ padding: 3 }}>
              <ImageSlider />
            </Box>
          </Paper>
        </Box>
      </motion.div>
    </div>
  );
};

export default RightSection;
