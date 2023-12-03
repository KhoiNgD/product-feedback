"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface MotionLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function MotionLink({ href, children }: MotionLinkProps) {
  const MyMotionLink = motion(Link);

  return (
    <MyMotionLink
      href={href}
      className="p3 text-blue underline hover:text-blue-link-hover"
      whileHover={{ y: -3 }}
      whileTap={{ y: 0 }}
    >
      {children}
    </MyMotionLink>
  );
}
