"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PATH_AUTH } from "@/route/paths";
import Loader from "@/components/Loader";
import { Box, Button } from "@mui/material";
import Wrapper from "@/components/Wrapper";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { Icon } from "@iconify/react";
import StudentProfileDetailsCard from "@/components/profile/StudentProfileDetailsCard";

function WebDashboard() {
  const pathname = usePathname();
  const router = useRouter();
  const [layout, setLayout] = useState(null);
  const data = "tokenActive";
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

  return (
    <Wrapper
      title={"Dashboard"}
      pageAction={
        <Button
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
      <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}>
        <StudentProfileDetailsCard />
      </Box>
    </Wrapper>
  );
}

export default WebDashboard;
