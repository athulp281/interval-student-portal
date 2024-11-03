import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const LogoHeader = () => {
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
        <Box sx={{ pt: 1 }}>
          <Image
            height={30}
            width={130}
            src={
              "https://www.intervaledu.com/static/web/images/logo/logo-dark.png"
            }
          />
        </Box>
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
