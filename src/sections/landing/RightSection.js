import ImageSlider from "@/components/ImageSlider";
import { Box, Paper } from "@mui/material";
import React from "react";

const RightSection = () => {
  return (
    <div>
      <Box sx={{ mr: 3 }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 5,
            mt: 2,

            background: `linear-gradient(to right, #F4F6FF 0%, #F4F6FF 10%, #b85fd3 100%)`,
          }}
        >
          <Box sx={{ padding: 3 }}>
            <ImageSlider />
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default RightSection;
