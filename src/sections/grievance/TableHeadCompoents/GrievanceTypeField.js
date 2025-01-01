import { Box } from "@mui/material";
import React, { memo, useMemo } from "react";
import { GrievanceType } from "../GrievancePreData";

const GrievanceTypeField = memo(({ grievanceType }) => {
  const dataname = useMemo(() => {
    return GrievanceType?.find((item) => item.id === grievanceType);
  }, [grievanceType, GrievanceType]);

  return <Box>{dataname?.name}</Box>;
});
GrievanceTypeField.displayName = "GrievanceTypeField";
export default GrievanceTypeField;
