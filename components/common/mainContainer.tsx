import { PropsWithChildren } from "react";
import styles from "./mainContainer.module.css";

export default function MainContainer({ children }: PropsWithChildren) {
  return <div className={styles.div}>{children}</div>;
}
