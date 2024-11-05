"use client";
import React, { useState, useEffect } from "react";
import LeftSection from "./LeftSection";
import { Box, Stack } from "@mui/material";
import RightSection from "./RightSection";
import LogoLoader from "@/components/LogoLeader";
import { motion, AnimatePresence } from "framer-motion";

const LandingPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {!showContent ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <LogoLoader />
          </motion.div>
        ) : (
          <Stack direction={"row"} spacing={2}>
            <Box width={"60%"}>
              <LeftSection />
            </Box>
            <Box sx={{ width: "40%" }}>
              <RightSection />
            </Box>
          </Stack>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
