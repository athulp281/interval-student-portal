"use client";
import React, { useEffect, useState } from "react";
import Page from "./page";
import { motion } from "framer-motion";
import { Box, Container, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { PATH_AUTH } from "@/route/paths";
import Breadcrumbs from "./Breadcrumbs";

const Title = ({ title }) => {
  function capitalizeFirstLetter(string) {
    if (typeof string !== "string") {
      return ""; // or handle the error appropriately
    }
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  const formattedTitle = capitalizeFirstLetter(title);
  return <Typography variant="h4">{formattedTitle}</Typography>;
};

const Wrapper = ({ title, children, pageAction }) => {
  const keyframesExample = {
    hidden: { opacity: 0, x: -100 },
    halfway: { opacity: 0.5, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const pathname = usePathname();
  const router = useRouter();
  const [layout, setLayout] = useState(null);
  const user =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;
  useEffect(() => {
    if (user) {
      router.push(pathname);
      setLayout({ auth: false, dashboard: true });
    } else {
      router.replace(PATH_AUTH.login);
      setLayout({ auth: true, dashboard: false });
    }
  }, [user, router, pathname]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {/* {user ? ( */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={keyframesExample}
        style={{ width: "100%" }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box padding={3}>
            <Box width="100%">
              <Title title={title} />
            </Box>
            <Box width="100%">
              <Breadcrumbs />
            </Box>
          </Box>
          <Box sx={{ padding: 4 }}>{pageAction}</Box>
        </Box>

        <Box padding={2.5}>
          <Page title={title} sx={{ width: "100%" }}>
            {children}
          </Page>
        </Box>
      </motion.div>
      {/* ) : null} */}
    </Box>
  );
};

export default Wrapper;
