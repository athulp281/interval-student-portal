import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Icon } from "@iconify/react";
import CreateNewGrievance from "../CreateNewGrievance";
import { Box } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const UpdateGirevance = ({ params, handleClosesMenu }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} sx={{ color: "green" }}>
        <Icon icon="radix-icons:update" width="20" height="20" /> Update
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth={"xl"}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>{"Update Grievance"}</Box>
            <Box>
              <Button onClick={handleClose}>x</Button>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          {open ? (
            <CreateNewGrievance
              params={params}
              setOpen={setOpen}
              handleClosesMenu={handleClosesMenu}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default UpdateGirevance;
