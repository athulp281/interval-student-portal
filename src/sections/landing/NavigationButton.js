import { Icon } from "@iconify/react";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const NavigationButton = () => {
  return (
    <Box>
      <Box
        sx={{
          background: `linear-gradient(to right, #0089d0 0%, #0089d0 10%, #F4F6FF 100%)`,
          height: 41,
          width: 300,
          borderRadius: 6,
        }}
      >
        <Stack direction={"row"} spacing={2}>
          <Box sx={{ padding: 1 }}>
            <Typography sx={{ color: "white" }}>Ready to Navigate</Typography>
          </Box>
          <Box pt={0.3}>
            <Icon
              icon="ei:arrow-up"
              height={35}
              width={35}
              style={{ color: "white", transform: "rotate(90deg)" }}
            />
          </Box>
          <Box pt={0.3} pl={1.7}>
            <Button
              sx={{
                backgroundColor: "white",
                color: "#0089d0",
                borderRadius: 4,
              }}
            >
              LogIn
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default NavigationButton;
