import styles from "./heading.module.css";

interface HeadingProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}

export default function Heading({ type, text }: HeadingProps) {
  switch (type) {
    case "h1":
      return <h1 className={styles.h1}>{text}</h1>;
    case "h2":
      return <h2 className={styles.h2}>{text}</h2>;
    case "h3":
      return <h3 className={styles.h3}>{text}</h3>;
    case "h4":
      return <h4 className={styles.h4}>{text}</h4>;
    case "h5":
      return <h5 className={styles.h5}>{text}</h5>;
    case "h6":
      return <h6 className={styles.h6}>{text}</h6>;
  }
}
