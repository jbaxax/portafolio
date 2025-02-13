"use client";

import { fadeIn } from "@/utils/motion-transition";
import { motion } from "framer-motion";

interface MotionTransitionProps {
  children: React.ReactNode;
  position: "right" | "bottom";
  className?: string;
}

export default function MotionTransition(props: MotionTransitionProps) {
  const { children, position, className } = props;
  return (
    <motion.div
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}
