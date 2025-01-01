import { Avatar, Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CustomTimeLine from "@/components/CustomTimeLine";
import { Icon } from "@iconify/react";
import MotionWrapper from "@/components/MotionWrapper";
import { useDispatch } from "react-redux";
import { getGrievanceJourney } from "@/redux/features/grievanceSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Grievancejourney = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (open) {
      dispatch(getGrievanceJourney(id));
    }
  }, [open]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        size="small"
        onClick={handleClickOpen}
        sx={{
          background: `linear-gradient(to right, #0089d0 0%, #0089d0 10%, #F4F6FF 100%)`,
          color: "white",
          borderRadius: 3,
        }}
      >
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
        sx={{
          background: `linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)`,
        }}
      >
        <DialogTitle>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {open ? (
              <MotionWrapper directions={"right"} delay={0.5}>
                <Box
                  sx={{
                    background: `linear-gradient(to right, #0089d0 0%, #0089d0 10%, #F4F6FF 100%)`,
                    color: "white",
                    borderRadius: 3,
                    padding: 0.5,
                    width: "20%",
                  }}
                >
                  <Icon icon="game-icons:journey" width="22" height="22" />{" "}
                  Grievance Journey...
                </Box>
              </MotionWrapper>
            ) : null}

            <Box>
              <Button
                onClick={handleClose}
                variant="outlined"
                sx={{ borderRadius: 3 }}
                size="small"
              >
                <Icon
                  icon="bitcoin-icons:cross-filled"
                  width="24"
                  height="24"
                />
              </Button>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          {open ? (
            <Box>
              <Stack direction={"row"} spacing={1}>
                <MotionWrapper directions={"left"} delay={0.5}>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Space Grotesk, serif",
                        fontSize: 32,
                      }}
                    >
                      A grievance journey is not just about addressing
                      complaints; it’s about fostering understanding, building
                      trust, and paving the way for meaningful resolution.
                    </Typography>
                  </Box>
                </MotionWrapper>

                <Box>
                  <MotionWrapper directions={"top"} delay={0.5}>
                    <Avatar
                      sx={{
                        border: 7,
                        borderColor: "grey.500",
                        height: 170,
                        width: 170,
                      }}
                      alt="Remy Sharp"
                      src="https://media.istockphoto.com/id/1423369897/photo/call-center-worker.jpg?s=612x612&w=0&k=20&c=KaxWNnsroknjxkXjfJijLhmdomOGFt4T-RwUF0qK3hc="
                    />
                  </MotionWrapper>
                </Box>
              </Stack>

              <CustomTimeLine />
            </Box>
          ) : null}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Grievancejourney;
