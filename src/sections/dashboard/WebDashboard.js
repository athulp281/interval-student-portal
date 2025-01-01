"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PATH_AUTH, PATH_DASHBOARD } from "@/route/paths";
import Loader from "@/components/Loader";
import { Box, Button, Stack } from "@mui/material";
import Wrapper from "@/components/Wrapper";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { Icon } from "@iconify/react";
import StudentProfileDetailsCard from "@/components/profile/StudentProfileDetailsCard";
import { useDispatch } from "react-redux";
import {
  studentDetails,
  getAllGrievance,
} from "@/redux/features/grievanceSlice";
import CourseDetails from "./CourseDetails";
import useResponsive from "@/components/Hooks/useResponsive";
import RecentGrievance from "./RecentGrievance";

function WebDashboard() {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const [layout, setLayout] = useState(null);
  const data = "tokenActive";

  useEffect(() => {
    dispatch(studentDetails());
    dispatch(getAllGrievance());
  }, []);
  useEffect(() => {
    const user =
      typeof window !== "undefined" ? localStorage.getItem("user") : null;
    if (user) {
      router.push(pathname);
      setLayout({ auth: false, dashboard: true });
    } else {
      router.replace(PATH_AUTH.login);
      setLayout({ auth: true, dashboard: false });
    }
  }, [router]);
  if (layout === null) {
    return (
      <Box
        sx={{
          marginTop: 35,
        }}
      >
        <Loader />
      </Box>
    );
  }

  const handleClick = () => {
    router.push(PATH_DASHBOARD.createnewgrievance);
  };

  return (
    <Wrapper
      title={"Dashboard"}
      pageAction={
        <Button
          onClick={handleClick}
          sx={{
            background: `linear-gradient(to right, #0089d0 0%, #0089d0 10%, #F4F6FF 100%)`,
            color: "white",
            borderRadius: 3,
          }}
        >
          <Icon icon="fluent:form-new-20-regular" width="20" height="20" /> Add
          New Grievance
        </Button>
      }
    >
      <Box>
        <ProfileHeader />
      </Box>
      <Stack direction={mdUp ? "row" : "column"} spacing={2} pt={2}>
        <Box width={mdUp ? "70%" : "100%"}>
          <CourseDetails />
          <Box>
            <RecentGrievance />
          </Box>
        </Box>
        <Box width={mdUp ? "30%" : "100%"}>
          <StudentProfileDetailsCard />
        </Box>
      </Stack>
    </Wrapper>
  );
}

export default WebDashboard;
