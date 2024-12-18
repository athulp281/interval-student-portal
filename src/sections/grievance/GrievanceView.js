"use client";
import Wrapper from "@/components/Wrapper";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PATH_DASHBOARD } from "@/route/paths";
import { Icon } from "@iconify/react";
// import { DataGrid } from "@mui/x-data-grid";
// import CustomGridToolbar from "@/components/CustomGridToolbar";
import { GRIEVANCE_TABLE_HEAD } from "./DemoTableHead";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllGrievance,
  getStudentsCourse,
} from "@/redux/features/grievanceSlice";
import MotionWrapper from "@/components/MotionWrapper";

const DataGrid = dynamic(
  () => import("@mui/x-data-grid").then((mod) => mod.DataGrid),
  {
    ssr: false,
  }
);

const GrievanceView = () => {
  const dispatch = useDispatch();
  const [gridSize, setGridSize] = useState(5);
  const { loading, allGrievancedata } = useSelector((state) => state.grievance);
  const router = useRouter();
  const handleClick = () => {
    router.push(PATH_DASHBOARD.createnewgrievance);
  };

  useEffect(() => {
    dispatch(getAllGrievance());
    dispatch(getStudentsCourse());
  }, []);
  useEffect(() => {
    console.log(allGrievancedata);
  }, [allGrievancedata]);
  return (
    <Wrapper
      title={"All Grievances"}
      pageAction={
        <MotionWrapper directions={"right"} delay={2}>
          <Button
            sx={{
              background: `linear-gradient(to right, #0089d0 0%, #0089d0 10%, #F4F6FF 100%)`,
              color: "white",
              borderRadius: 3,
            }}
            onClick={handleClick}
          >
            <Icon icon="basil:add-outline" width="24" height="24" />
            Add Grievance
          </Button>
        </MotionWrapper>
      }
    >
      <MotionWrapper directions={"bottom"}>
        <Box>
          <DataGrid
            autoHeight
            disablePagination={false}
            loading={loading}
            disableVirtualization
            sx={{
              "& .MuiDataGrid-columnHeaderTitle": {
                textOverflow: "clip",
                whiteSpace: "break-spaces",
                lineHeight: 1,
              },
            }}
            checkboxSelection
            rows={allGrievancedata ? allGrievancedata : []}
            columns={GRIEVANCE_TABLE_HEAD}
            getRowId={(row) => row.serialNumber}
            pageSize={gridSize}
            rowsPerPageOptions={[5, 10, 25, 50]}
            onPageSizeChange={(newGridSize) => setGridSize(newGridSize)}
          />
        </Box>
      </MotionWrapper>
    </Wrapper>
  );
};
export const GrievanceDemo = [
  {
    slNo: 1,
    subject: "Maths",
    requester: "Test User 1",
    channel: "Web Form",
    group: "Group A",
    assigned: "User A",
    date: "17-12-2024",
  },
  {
    slNo: 2,
    subject: "Science",
    requester: "Test User 2",
    channel: "Email",
    group: "Group B",
    assigned: "User B",
    date: "18-12-2024",
  },
  {
    slNo: 3,
    subject: "English",
    requester: "Test User 3",
    channel: "Mobile App",
    group: "Group A",
    assigned: "User C",
    date: "19-12-2024",
  },
  {
    slNo: 4,
    subject: "History",
    requester: "Test User 4",
    channel: "Chat",
    group: "Group C",
    assigned: "User D",
    date: "20-12-2024",
  },
  {
    slNo: 5,
    subject: "Geography",
    requester: "Test User 5",
    channel: "Web Form",
    group: "Group A",
    assigned: "User E",
    date: "21-12-2024",
  },
  {
    slNo: 6,
    subject: "Physics",
    requester: "Test User 6",
    channel: "Email",
    group: "Group B",
    assigned: "User F",
    date: "22-12-2024",
  },
  {
    slNo: 7,
    subject: "Chemistry",
    requester: "Test User 7",
    channel: "Web Form",
    group: "Group C",
    assigned: "User G",
    date: "23-12-2024",
  },
  {
    slNo: 8,
    subject: "Biology",
    requester: "Test User 8",
    channel: "Chat",
    group: "Group A",
    assigned: "User H",
    date: "24-12-2024",
  },
  {
    slNo: 9,
    subject: "Computer Science",
    requester: "Test User 9",
    channel: "Mobile App",
    group: "Group B",
    assigned: "User I",
    date: "25-12-2024",
  },
  {
    slNo: 10,
    subject: "Economics",
    requester: "Test User 10",
    channel: "Web Form",
    group: "Group C",
    assigned: "User J",
    date: "26-12-2024",
  },
];

export default GrievanceView;
