"use client";

import styles from "./navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "../../assets/homeIcon";
import QuestionIcon from "../../assets/questionIcon";
import { motion } from "framer-motion";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/">
            <HomeIcon />
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/about">
            <QuestionIcon />
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
}
