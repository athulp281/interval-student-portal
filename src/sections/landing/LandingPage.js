"use client";
import React, { useState, useEffect } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import LogoLoader from "@/components/LogoLeader";
import { Box, Stack, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PATH_DASHBOARD, PATH_AUTH } from "@/route/paths";

const LandingPage = () => {
  const [showContent, setShowContent] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigateToLogin = () => {
    setShowContent(false);
    setTimeout(() => {
      router.push(PATH_AUTH.login);
    }, 400);
  };

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
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.85, x: "-50%" }} // Smooth slide-out with scaling
            transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }} // Smooth curve for easing
          >
            <Stack direction={"row"} spacing={2}>
              <Box width={"60%"}>
                <LeftSection />
              </Box>
              <Box sx={{ width: "40%" }}>
                <RightSection />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNavigateToLogin}
                  sx={{ mt: 2 }}
                >
                  Go to Login
                </Button>
              </Box>
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
