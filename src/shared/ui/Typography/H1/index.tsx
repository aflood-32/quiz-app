import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const H1 = ({ children }: PropsWithChildren) => {
  return <h1 className={styles.h1}>{children}</h1>;
};

export default H1;
