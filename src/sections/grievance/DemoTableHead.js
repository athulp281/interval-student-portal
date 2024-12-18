import DateField from "./TableHeadCompoents/DateField";
import GrievanceSubTypeField from "./TableHeadCompoents/GrievanceSubTypeField";
import GrievanceTypeField from "./TableHeadCompoents/GrievanceTypeField";

export const GRIEVANCE_TABLE_HEAD = [
  {
    field: "serialNumber",
    headerName: "SlNo",
    width: 60,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
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
];
