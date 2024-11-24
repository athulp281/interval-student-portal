import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Icon } from "@iconify/react";
import useResponsive from "@/components/Hooks/useResponsive";
import Logo from "@/components/Logo";

const LogInRegForm = () => {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 3,
        delay: 2, // Add delay for staggered animations
        type: "spring",
        stiffness: 50,
      },
    },
  };
  return (
    <div>
      {smUp ? null : (
        <Box sx={{ ml: 5 }}>
          <Logo />
        </Box>
      )}

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack direction={"row"} spacing={4}>
            <motion.div
              custom="left"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <Box>
                <Chip
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/interval_learning_/",
                      "_blank"
                    );
                  }}
                  sx={{ borderColor: "#0089d0" }}
                  icon={<Icon icon="skill-icons:instagram" />}
                  variant="outlined"
                  label="Instagram"
                />
              </Box>
            </motion.div>
            <motion.div
              custom="right"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <Box>
                <Chip
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/company/intervallearning/posts/?feedView=all",
                      "_blank"
                    );
                  }}
                  sx={{ borderColor: "#0089d0" }}
                  variant="outlined"
                  icon={<Icon icon="skill-icons:linkedin" />}
                  label="LinkedIn"
                />
              </Box>
            </motion.div>
            <motion.div
              custom="bottom"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <Box>
                <Chip
                  onClick={() => {
                    window.open(
                      "https://www.youtube.com/channel/UCKykyjqXhrmfr5qw0OxT8PQ",
                      "_blank"
                    );
                  }}
                  sx={{ borderColor: "#0089d0" }}
                  variant="outlined"
                  icon={<Icon icon="logos:youtube-icon" />}
                  label="YouTube"
                />
              </Box>
            </motion.div>
          </Stack>
        </Box>
        <Paper
          sx={{
            padding: smUp ? 2 : 1,
            backgroundColor: "#f9fafb",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <motion.div
            custom="left"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <Typography
              variant={smUp ? "h2" : "h4"}
              fontWeight="bold"
              align={smUp ? "right" : "center"}
              sx={{ fontFamily: "Space Grotesk, serif" }}
              gutterBottom
              // color="white"
            >
              Upgrade Your Learning <br /> With Us...
            </Typography>
          </motion.div>
          <motion.div
            custom="right"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <Typography
              variant="body2"
              sx={{ color: "grey.500" }}
              align="center"
              mb={smUp ? 3 : 1}
            >
              Enter your details below.
            </Typography>
          </motion.div>

          <Stack direction={"column"} width={"80%"}>
            <motion.div
              custom="bottom"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <TextField
                label="Full Name"
                fullWidth
                margin="normal"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "25px", // Rounded border
                  },
                }}
              />
            </motion.div>
            <motion.div
              custom="bottom"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <TextField
                label="Email Address"
                type="email"
                fullWidth
                margin="normal"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "25px", // Rounded border
                  },
                }}
              />
            </motion.div>
            <motion.div
              custom="bottom"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "25px", // Rounded border
                  },
                }}
              />
            </motion.div>
            <motion.div
              custom="bottom"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <TextField
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                // InputLabelProps={{
                //   style: { color: "white" },
                // }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={toggleConfirmPasswordVisibility}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                  // style: { color: "white" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "25px", // Rounded border
                  },
                }}
              />
            </motion.div>
            <motion.div
              custom="bottom"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  fullWidth
                  sx={{
                    color: "white",
                    background: `linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)`,
                    borderRadius: 3,
                    mt: 2,
                    py: 1.5,
                    width: "40%",
                  }}
                >
                  <Icon icon="svg-spinners:blocks-shuffle-3" />
                  Sign Up
                </Button>
              </Box>
            </motion.div>
          </Stack>
          <Typography
            align="center"
            mt={1}
            // color="white"
          >
            Already have an account?{" "}
            <Typography
              component="span"
              color="primary"
              style={{ cursor: "pointer" }}
            >
              Log in
            </Typography>
          </Typography>
        </Paper>
      </motion.div>
    </div>
  );
};

export default LogInRegForm;
