import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const LogoHeader = () => {
  const [logoRotated, setLogoRotated] = useState(false);
  const controls = useAnimation();
  useEffect(() => {
    if (!logoRotated) {
      controls.start({
        rotateX: 360,
        transition: { duration: 1, ease: "easeInOut", delay: 3 },
      });
      setLogoRotated(true);
    }

    if (logoRotated) {
      setInterval(() => {
        setLogoRotated(false);
      }, 6000);
    }
  }, [logoRotated, controls]);
  return (
    <Box
      sx={{
        height: 44,
        width: "100%",
        background: `linear-gradient(to right, #F4F6FF 0%, #F4F6FF 10%, #a125c2 100%)`,
        borderRadius: 5,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <motion.div animate={controls}>
          <Box sx={{ pt: 1 }}>
            <Image
              height={30}
              width={130}
              src={
                "https://www.intervaledu.com/static/web/images/logo/logo-dark.png"
              }
            />
          </Box>
        </motion.div>

        <Box>
          <Stack direction={"row"} spacing={1}>
            <Box sx={{ pt: 0.5, paddingRight: 0.4 }}>
              <Button sx={{ borderRadius: 3, backgroundColor: "white" }}>
                Visti Our WebSite
              </Button>
            </Box>
            <Box sx={{ pt: 0.5, paddingRight: 0.4 }}>
              <Button
                sx={{
                  borderRadius: 3,
                  backgroundColor: "white",
                  color: "grey.500",
                }}
              >
                Contact us
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default LogoHeader;
