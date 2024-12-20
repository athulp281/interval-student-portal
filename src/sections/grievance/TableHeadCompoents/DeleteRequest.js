import { Box } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRequest,
  getAllGrievance,
} from "@/redux/features/grievanceSlice";
import { useSnackbar } from "notistack";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteRequest = ({ id, handleCloses }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteRequest(id)).then((res) => {
      if (res.payload.status === "error") {
        enqueueSnackbar(res.payload.message, { variant: "error" });
      } else if (res.payload.status === "success") {
        dispatch(getAllGrievance());
        setOpen(false);
        handleCloses();
        enqueueSnackbar(res.payload.message, {
          variant: "success",
        });
      }
    });
  };

  return (
    <Box>
      <Button sx={{ color: "red" }} onClick={handleClickOpen}>
        <Icon
          icon="material-symbols-light:delete-outline-rounded"
          width="24"
          height="24"
        />
        Delete
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete Request"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure..? you want to delete this request...!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button sx={{ color: "red" }} onClick={handleDelete}>
            <Icon
              icon="material-symbols:delete-outline-rounded"
              width="24"
              height="24"
            />{" "}
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DeleteRequest;
