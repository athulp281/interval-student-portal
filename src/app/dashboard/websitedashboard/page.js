"use client";
import Wrapper from "@/components/Wrapper";
import { PATH_DASHBOARD } from "@/route/paths";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
const page = () => {
  const router = useRouter();
  //   useEffect(() => {
  //     router.prefetch(PATH_DASHBOARD.dashboard); // Preload the dashboard page
  //   }, [router]);
  return (
    <div>
      <Wrapper title={"dashboard"}>Dashboard Component</Wrapper>
    </div>
  );
};

export default page;
