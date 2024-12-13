"use client";
import Wrapper from "@/components/Wrapper";
import { Box, Button } from "@mui/material";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { PATH_DASHBOARD } from "@/route/paths";
import { Icon } from "@iconify/react";

const GrievanceView = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(PATH_DASHBOARD.createnewgrievance);
  };
  return (
    <Wrapper
      title={"GrievanceView"}
      pageAction={
        <Button onClick={handleClick}>
          <Icon icon="basil:add-outline" width="24" height="24" />
          Add Grievance
        </Button>
      }
    >
      <Box>hello</Box>
    </Wrapper>
  );
};

export default GrievanceView;
