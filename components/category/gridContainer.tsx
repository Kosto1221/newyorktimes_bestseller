import { PropsWithChildren } from "react";
import styles from "./gridContainer.module.css";

export default function GridContainer({ children }: PropsWithChildren) {
  return <div className={styles.div}>{children}</div>;
}
