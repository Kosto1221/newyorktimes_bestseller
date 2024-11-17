import Link from "next/link";
import styles from "./bookContainer.module.css";

export default function BookContainer({ imagePath, title, author, link }) {
  return (
    <Link className={styles.link} href={link} target="_blank">
      <img src={imagePath}></img>
      <div>
        <span>{title}</span>
        <span>{author}</span>
      </div>
    </Link>
  );
}
