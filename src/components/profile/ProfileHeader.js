import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import { SidebarAvatar } from "../sidebar/SidebarAvatar";
import MotionWrapper from "../MotionWrapper";

const ProfileHeader = () => {
  return (
    <Box>
      <MotionWrapper directions={"top"} delay={1}>
        <Paper
          sx={{
            backgroundImage: "url('/header.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
            width: "99.4%",
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              height: "90px",
              background: "rgba(0, 0, 0, 0.5)",
              borderRadius: "0 0 40px 40px",
            }}
          >
            <Box>
              <Box
                sx={{
                  height: 90,
                  width: 90,
                  position: "relative",
                  top: -60,
                  ml: 4,
                }}
              >
                <MotionWrapper directions={"bottom"} delay={1.5}>
                  <Box
                    sx={{
                      padding: 0.6,
                      background: `linear-gradient(to bottom, #702dff 0%, #702dff 10%, white 100%)`,
                      borderRadius: "50%",
                      height: 100,
                      width: 100,
                    }}
                  >
                    <Avatar
                      sx={{ height: 90, width: 90 }}
                      src={`https://www.icon0.com/free/static2/preview2/stock-photo-kid-boy-avatar-people-icon-character-cartoon-32922.jpg`}
                      alt="photoURL"
                    />
                  </Box>
                </MotionWrapper>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  pl: 6.9,
                  // pt: 1.3,
                  position: "relative",
                  top: -40,
                  display: "flex",
                }}
              >
                <Typography color={"white"} variant="h6">
                  Athul P
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </MotionWrapper>
    </Box>
  );
};

export default ProfileHeader;
