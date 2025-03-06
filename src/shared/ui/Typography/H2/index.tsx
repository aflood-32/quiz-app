import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const H2 = ({ children }: PropsWithChildren) => {
  return <h1 className={styles.h2}>{children}</h1>;
};

export default H2;
