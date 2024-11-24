import React, { useContext, useEffect } from "react";

import "../assets/imgContainerStyle.css";
import useResponsive from "./Hooks/useResponsive";
import { motion, useTransform, useMotionValue } from "framer-motion";
export const ImageContainer = () => {
  const smUp = useResponsive("up", "sm");

  return (
    <div className="element-to-animate">
      <section className="home">
        <div className="users-color-container">
          <span className="item" style={{ "--i": 1 }} />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <img
              className="item"
              src={"/sliderimg/img1.png"}
              style={{ "--i": 2 }}
              alt=""
            />
          </motion.div>
          <span className="item" style={{ "--i": 3 }} />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <img
              className="item"
              src={"/sliderimg/img2.png"}
              style={{ "--i": 4 }}
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <img
              className="item"
              src={"/sliderimg/img3.png"}
              style={{ "--i": 10 }}
              alt=""
            />
          </motion.div>
          <span className="item" style={{ "--i": 11 }} />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <img
              className="item"
              src={"/sliderimg/img4.png"}
              style={{ "--i": 12 }}
              alt=""
            />
          </motion.div>
          <span className="item" style={{ "--i": 5 }} />

          <span className="item" style={{ "--i": 9 }} />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <img
              className="item"
              src={"/sliderimg/img5.png"}
              style={{ "--i": 8 }}
              alt=""
            />
          </motion.div>
          <span className="item" style={{ "--i": 7 }} />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <img
              className="item"
              src={"/sliderimg/img6.png"}
              style={{ "--i": 6 }}
              alt=""
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
