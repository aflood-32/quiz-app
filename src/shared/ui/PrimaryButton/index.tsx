import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./styles.module.css";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & PropsWithChildren;

const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={styles.primary_button}>
      {children}
    </button>
  );
};

export default PrimaryButton;
