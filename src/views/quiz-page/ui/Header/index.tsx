import { PropsWithChildren } from "react";

import styles from "./styles.module.css";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__button}>{children}</div>
    </header>
  );
};

export default Header;
