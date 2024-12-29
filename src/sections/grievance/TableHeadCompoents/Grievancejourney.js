import { Box, Typography } from "@mui/material";
import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CustomTimeLine from "@/components/CustomTimeLine";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Grievancejourney = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        View Grievance Journey
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth={"lg"}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        // sx={{
        //   background: `linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)`,
        // }}
      >
        <DialogTitle>{"Grievance Journey"}</DialogTitle>
        <DialogContent>
          {open ? (
            <Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk, serif",
                    fontSize: 32,
                  }}
                >
                  A grievance journey is not just about addressing complaints;
                  it’s about fostering understanding, building trust, and paving
                  the way for meaningful resolution.
                </Typography>
              </Box>
              <CustomTimeLine />
            </Box>
          ) : null}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Grievancejourney;
