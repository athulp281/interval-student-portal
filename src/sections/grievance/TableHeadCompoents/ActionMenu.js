import { Box, IconButton } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DeleteRequest from "./DeleteRequest";
import { Icon } from "@iconify/react";
import UpdateGirevance from "./UpdateGirevance";

const ActionMenu = ({ params }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Icon icon="majesticons:more-menu-vertical" width="40" height="40" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {anchorEl ? (
          <Box>
            <MenuItem>
              <DeleteRequest id={params.id} handleCloses={handleClose} />
            </MenuItem>
            <MenuItem>
              <UpdateGirevance params={params} handleClosesMenu={handleClose} />
            </MenuItem>
          </Box>
        ) : null}
      </Menu>
    </Box>
  );
};

export default ActionMenu;
