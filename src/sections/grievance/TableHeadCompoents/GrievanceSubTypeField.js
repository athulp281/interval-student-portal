import React, { memo, useMemo } from "react";
import { GrievanceType } from "../GrievancePreData";
import { Box } from "@mui/material";

const GrievanceSubTypeField = memo(({ grievanceType, grievanceSubType }) => {
  const data = useMemo(() => {
    return GrievanceType.find((item) => item.id === grievanceType);
  }, [grievanceType]);

  const subType = useMemo(() => {
    return data?.subTypes.find((item) => item.id === grievanceSubType);
  }, [data, grievanceSubType]);

  return <Box>{subType?.name || "N/A"}</Box>;
});

export default GrievanceSubTypeField;
