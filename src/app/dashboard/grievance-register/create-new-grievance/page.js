import Wrapper from "@/components/Wrapper";
import CreateNewGrievance from "@/sections/grievance/CreateNewGrievance";
import React from "react";

function page() {
  return (
    <Wrapper title={"Register New Grievance"}>
      <CreateNewGrievance />
    </Wrapper>
  );
}

export default page;
