// components/StatsCard.js

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const StatsCard = ({ value, label, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color,
        borderRadius: "12px",
        padding: "1.5rem",
        width: "100px",
        height: "90px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        style={{
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="body1"
        component="div"
        style={{
          fontSize: "0.5rem",
          color: "#fff",
          textTransform: "uppercase",
          fontWeight: "500",
        }}
      >
        {label}
      </Typography>
    </motion.div>
  );
};

export default StatsCard;
