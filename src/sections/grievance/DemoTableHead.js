import { Chip } from "@mui/material";
import ActionMenu from "./TableHeadCompoents/ActionMenu";
import DateField from "./TableHeadCompoents/DateField";
import Grievancejourney from "./TableHeadCompoents/Grievancejourney";
import GrievanceSubTypeField from "./TableHeadCompoents/GrievanceSubTypeField";
import GrievanceTypeField from "./TableHeadCompoents/GrievanceTypeField";

const handleStatus = (params) => {
  return (
    <Chip
      size="small"
      variant="contained"
      color="primary"
      label={params.row.status}
    />
  );
};
export const GRIEVANCE_TABLE_HEAD = [
  {
    field: "serialNumber",
    headerName: "SlNo",
    width: 60,
  },
  {
    field: "status",
    headerName: "Status",
    width: 250,
    renderCell: (params) => handleStatus(params),
  },
  {
    field: "courseName",
    headerName: "Course",
    width: 250,
  },
  {
    field: "date",
    headerName: "Raised Date",
    width: 150,
    renderCell: (params) => <DateField {...params.row} />,
  },
  {
    field: "grievanceType",
    headerName: "Grievance Type",
    width: 250,
    renderCell: (params) => <GrievanceTypeField {...params.row} />,
  },
  {
    field: "grievanceSubType",
    headerName: "grievanceSubType",
    width: 250,
    renderCell: (params) => <GrievanceSubTypeField {...params.row} />,
  },
  {
    field: "description",
    headerName: "Description",
    width: 250,
  },
  {
    field: "assigned",
    headerName: "Assigned",
    width: 150,
  },
  {
    field: "Grievance Journey",
    headerName: "Grievance Journey",
    width: 190,
    renderCell: (params) => <Grievancejourney id={params.row.id} />,
  },
  {
    field: "Actions",
    headerName: "Actions",
    width: 150,
    renderCell: (params) => <ActionMenu params={params.row} />,
  },
];
