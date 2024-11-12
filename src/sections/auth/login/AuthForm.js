// components/AuthForm.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleForm = () => setIsSignUp(!isSignUp);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsSignUp(false);
  //     }, 2000);
  //   }, []);

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{
        backgroundColor: "#f0f2f5",
        overflow: "hidden",
      }}
    >
      {/* Green Layout Section with smooth transition */}
      <Box
        component={motion.div}
        initial={{ x: 0, opacity: 1, scale: 1 }}
        animate={{
          x: isSignUp && !isMobile ? "100%" : "0",
          opacity: isSignUp ? 0.9 : 1,
          scale: isSignUp ? 0.98 : 1,
          clipPath: isSignUp
            ? "ellipse(90% 100% at 100% 50%)"
            : "ellipse(90% 100% at 0% 50%)",
        }}
        transition={{
          duration: 0.7,
          ease: [0.6, -0.05, 0.01, 0.99],
          clipPath: { duration: 0.8, ease: "easeInOut" },
        }}
        sx={{
          width: isMobile ? "100%" : "50%",
          height: isMobile ? "40vh" : "100%",
          background: isSignUp
            ? `linear-gradient(to right, #F4F6FF 0%, #F4F6FF 10%, #a125c2 100%)`
            : `linear-gradient(to left, #0089d0 0%, #0089d0 10%, #F4F6FF 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
          textAlign: "center",
          clipPath: !isMobile ? "ellipse(90% 100% at 0% 50%)" : "none",
          ...(isMobile && { padding: 3, mb: 2 }),
        }}
      >
        <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
          {isSignUp ? "Welcome Back!" : "New here?"}
        </Typography>
        <Typography variant="body1" mb={2}>
          {isSignUp
            ? "Already have an account? Log in to continue."
            : "Sign up and start your journey with us."}
        </Typography>
        <Button variant="outlined" color="inherit" onClick={toggleForm}>
          {isSignUp ? "Sign In" : "Sign Up"}
        </Button>
      </Box>

      {/* Form Section with smooth transition */}
      <Box
        component={motion.div}
        initial={{ x: 0, opacity: 1, scale: 1 }}
        animate={{
          x: isSignUp && !isMobile ? "-100%" : "0",
          opacity: isSignUp ? 0.95 : 1,
          scale: isSignUp ? 1.02 : 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
        sx={{
          width: isMobile ? "100%" : "50%",
          height: isMobile ? "60vh" : "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 3,
          backgroundColor: isMobile ? "white" : "transparent",
          boxShadow: isMobile ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none",
          borderRadius: isMobile ? 2 : 0,
        }}
      >
        <Typography variant={isMobile ? "h6" : "h5"} mb={2}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        {isSignUp && (
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
        )}
        <Button variant="contained" color="primary" fullWidth={isMobile}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
      </Box>
    </Box>
  );
}
