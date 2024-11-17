import { PropsWithChildren } from "react";
import styles from "./categoryContainer.module.css";

export default function CategoryContainer({ children }: PropsWithChildren) {
  return <div className={styles.div}>{children}</div>;
}
