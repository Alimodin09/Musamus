import React from "react";
import profileImg from "../assets/profile.jpg";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* PROFILE IMAGE */}
      <motion.img
        src={profileImg}
        alt="Profile"
        className="profile-img"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.div
        className="hero-card"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.h1 variants={item}>Musa — Product Designer</motion.h1>
        <motion.p variants={item}>
          I design and build accessible, delightful interfaces. I focus on clean,
          minimal design and smooth interactions.
        </motion.p>
        <motion.div className="cta" variants={item}>
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn secondary" href="#">Download CV</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
