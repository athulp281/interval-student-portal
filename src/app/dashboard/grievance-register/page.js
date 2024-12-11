import Wrapper from "@/components/Wrapper";
import { GrievanceView } from "@/sections/grievance";
import React from "react";

function page() {
  return (
    <Wrapper title={"Grievance Register"}>
      <GrievanceView />
    </Wrapper>
  );
}

export default page;
