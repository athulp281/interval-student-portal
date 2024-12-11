import {
  AppBar,
  Box,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect } from "react";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import AccountPopover from "../AccountPopover";
import MobileSideBar from "./MobileSideBar";
import useResponsive from "@/components/Hooks/useResponsive";
import { Icon } from "@iconify/react";
import Notification from "./Notification";
import SearchBar from "../SearchBar";

const Appbar = ({ open, setOpen }) => {
  const smUp = useResponsive("up", "sm");
  const mdUp = useResponsive("up", "md");

  useEffect(() => {
    if (smUp) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [smUp]);

  const drawerWidth = 270;
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: smUp ? drawerWidth : 0,
      width: `calc(100% - ${smUp ? drawerWidth : 0}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: "none", bgcolor: "#f9fafb" }}
      open={open}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: open ? "flex-end" : "space-between",
        }}
      >
        {smUp ? (
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <Icon
              icon="line-md:chevron-small-triple-right"
              height={23}
              width={23}
            />
          </IconButton>
        ) : (
          <MobileSideBar />
        )}
        {smUp ? (
          <Box sx={{ mr: 2, mt: 0.3 }}>
            <SearchBar />
          </Box>
        ) : null}

        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <AccountPopover />
          <Box sx={{ ml: 2 }}>
            <Paper
              elevation={3}
              sx={{
                width: 150,
                height: "100%",
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: `linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)`,
                color: "white",
              }}
            >
              <Stack direction={"row"}>
                <Box>
                  <Icon icon="ph:student" width="25" height="25" />
                </Box>
                <Typography sx={{ fontWeight: 600, fontSize: 12, pt: 0.7 }}>
                  Athul P
                </Typography>
                <Box sx={{ pt: 0.5, pl: 4 }}>
                  <Icon icon="icon-park-outline:down" width="20" height="20" />
                </Box>
              </Stack>
            </Paper>
          </Box>
          <Box ml={0.5}>
            <Paper
              elevation={3}
              sx={{
                width: 43,
                height: "100%",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: `linear-gradient(to bottom, #a125c2 0%, #a125c2 10%, #0089d0 100%)`,
                color: "white",
              }}
            >
              <Notification />
            </Paper>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
