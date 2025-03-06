import React from "react";
import styles from "./styles.module.css";

type BurgerButtonProps = {
  isActive?: boolean;
  onClick: () => void;
};

const BurgerButton = ({ onClick, isActive }: BurgerButtonProps) => {
  const getBurgerClassNames = () => {
    if (isActive) {
      return [styles.burger_button, styles.open].join(" ");
    }

    return styles.burger_button;
  };

  return (
    <button type="button" className={getBurgerClassNames()} onClick={onClick}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default BurgerButton;
