"use client";

import Link from "next/link";
import styles from "./category.module.css";
import { motion } from "framer-motion";

interface ICategory {
  id: string;
  title: string;
}

export default function Category({ id, title }: ICategory) {
  return (
    <motion.div
      className={styles.div}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link href={`/list/${id}`}>{title}</Link>
    </motion.div>
  );
}
