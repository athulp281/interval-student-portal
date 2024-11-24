// // components/AuthForm.js
// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import loginimg from "../../../../public/authPage/login.png";
// import Logo from "@/components/Logo";
// import { Icon } from "@iconify/react";

// export default function AuthForm() {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const toggleForm = () => setIsSignUp(!isSignUp);

//   return (
//     <AnimatePresence>
//       <Box
//         component={motion.div}
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.95 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         display="flex"
//         flexDirection={isMobile ? "column" : "row"}
//         alignItems="center"
//         justifyContent="center"
//         height="100vh"
//         sx={{
//           backgroundColor: "#f0f2f5",
//           overflow: "hidden",
//         }}
//       >
//         {/* Green Layout Section with smooth transition */}
//         <Box
//           component={motion.div}
//           initial={{ x: 0, opacity: 1 }}
//           animate={{
//             x: isSignUp && !isMobile ? "100%" : "0",
//             opacity: isSignUp ? 0.9 : 1,
//             scale: isSignUp ? 0.98 : 1,
//             clipPath: isSignUp
//               ? "ellipse(90% 100% at 100% 50%)"
//               : "ellipse(90% 100% at 0% 50%)",
//           }}
//           transition={{
//             duration: 0.8,
//             ease: [0.6, -0.05, 0.01, 0.99],
//           }}
//           sx={{
//             width: isMobile ? "100%" : "50%",
//             height: isMobile ? "40vh" : "100%",
//             background: isSignUp
//               ? `linear-gradient(to right,  #a125c2 0%,  #a125c2 10%, #F4F6FF 100%)`
//               : `linear-gradient(to left, #0089d0 0%, #0089d0 10%, #F4F6FF 100%)`,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "white",
//             flexDirection: "column",
//             textAlign: "center",
//             clipPath: !isMobile ? "ellipse(90% 100% at 0% 50%)" : "none",
//             ...(isMobile && { padding: 3, mb: 2 }),
//           }}
//         >
//           <Box sx={{ padding: 1 }}>
//             <Logo />
//           </Box>

//           <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
//             {isSignUp ? "Welcome Back!" : "New here?"}
//           </Typography>
//           <Typography variant="body1" mb={2}>
//             {isSignUp
//               ? "Already have an account? Log in to continue."
//               : "Sign up and start your journey with us."}
//           </Typography>
//           <Button
//             sx={{
//               color: "white",
//               background: `linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)`,
//               borderRadius: 3,
//               width: 150,
//             }}
//             color="inherit"
//             onClick={toggleForm}
//           >
//             {isSignUp ? "Sign In" : "Sign Up"}
//           </Button>
//           {/* <Image src={loginimg} alt="login" height={400} width={400} /> */}
//         </Box>

//         {/* Form Section with smooth transition */}
//         <Box
//           component={motion.div}
//           initial={{ x: 0, opacity: 1 }}
//           animate={{
//             x: isSignUp && !isMobile ? "-100%" : "0",
//             opacity: isSignUp ? 0.95 : 1,
//             scale: isSignUp ? 1.02 : 1,
//           }}
//           transition={{
//             duration: 0.8,
//             ease: [0.6, -0.05, 0.01, 0.99],
//           }}
//           sx={{
//             width: isMobile ? "100%" : "50%",
//             height: isMobile ? "60vh" : "100%",
//             display: "flex",
//             // alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             padding: 3,
//             backgroundColor: isMobile ? "white" : "transparent",
//             boxShadow: isMobile ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none",
//             borderRadius: isMobile ? 2 : 0,
//           }}
//         >
//           <Typography variant={isMobile ? "h4" : "h3"} mb={2}>
//             {isSignUp ? "Sign Up" : "Sign In"}
//           </Typography>
//           <Box>
//             <Typography variant="h6" sx={{ color: "grey.500" }}>
//               Upgrade Your Learning With Us...
//             </Typography>
//           </Box>

//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             sx={{ width: "100%", mt: 4 }}
//           >
//             <TextField
//               label="Username"
//               variant="outlined"
//               fullWidth
//               sx={{ width: "90%", mb: 2 }}
//             />
//             <TextField
//               label="Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               sx={{ width: "90%", mb: 2 }}
//             />
//             {isSignUp && (
//               <TextField
//                 label="Confirm Password"
//                 type="password"
//                 variant="outlined"
//                 fullWidth
//                 sx={{ width: "90%", mb: 2 }}
//               />
//             )}
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "center" }}>
//             <Button
//               sx={{
//                 color: "white",
//                 background: `linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)`,
//                 borderRadius: 3,
//               }}
//               fullWidth={isMobile}
//             >
//               <Icon
//                 icon="arcticons:authenticator"
//                 style={{ color: "white" }}
//                 height={26}
//                 width={26}
//               />{" "}
//               {isSignUp ? "Sign Up" : "Sign In"}
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </AnimatePresence>
//   );
// }

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";
import loginimg from "../../../../public/authPage/login.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import VerticalImageSlider from "./VerticalImageSlider";
import { ImageContainer } from "@/components/ImageContainer";
import LogInRegForm from "./LogInRegForm";
import Logo from "@/components/Logo";
import useResponsive from "@/components/Hooks/useResponsive";

export default function AuthForm() {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");
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
        duration: 2,
        delay: 1, // Add delay for staggered animations
        type: "spring",
        stiffness: 50,
      },
    },
  };
  return (
    <motion.div
      custom="bottom"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <Box
        display="flex"
        minHeight="100vh"
        sx={{
          alignItems: "center",
          justifyContent: "space-around",
          padding: 2,
        }}
      >
        {mdUp ? (
          <Box
            sx={{
              background:
                "linear-gradient(to bottom,white 0%, white 10%, #a125c2 100%)",
              borderRadius: 5,
              padding: 5,
              height: "95vh",
              width: "50%",
            }}
          >
            <Box>
              <Logo />
            </Box>

            <Box sx={{ height: "93vh", padding: 2, pt: 15 }}>
              <ImageContainer />
            </Box>
          </Box>
        ) : null}

        <Box sx={{ width: "100%", padding: smUp ? 3 : null }}>
          <LogInRegForm />
        </Box>
      </Box>
    </motion.div>
  );
}
