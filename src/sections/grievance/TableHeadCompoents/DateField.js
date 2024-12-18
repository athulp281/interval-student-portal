import { Box, Chip } from "@mui/material";
import React, { memo, useMemo } from "react";
import dayjs from "dayjs";
import { Icon } from "@iconify/react";

const DateField = memo(({ date }) => {
  const formattedDate = useMemo(() => dayjs(date).format("YYYY-MM-DD"), [date]);

  return (
    <Box>
      <Chip
        sx={{
          background: `linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)`,
          color: "white",
        }}
        size="small"
        icon={
          <Icon icon="stash:data-date" width="24" height="24" color="white" />
        }
        label={formattedDate}
        variant="contained"
        // color="primary"
      />
    </Box>
  );
});

export default DateField;
