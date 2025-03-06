import styles from "./styled.module.css";
import { PropsWithChildren } from "react";

type AnswerButtonProps = PropsWithChildren & {
  isActive?: boolean;
  isValid?: boolean;
  isInvalid?: boolean;
  onClick?: () => void;
};

const AnswerButton = ({
  isActive,
  isValid,
  isInvalid,
  onClick,
  children,
}: AnswerButtonProps) => {
  return (
    <button
      type="button"
      className={styles.answer}
      data-selected={isActive}
      data-valid={isValid}
      data-invalid={isInvalid}
      onClick={onClick}
    >
      <div className={styles.answer__background}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 288 56"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M16.8175 5.31576C18.9762 2.29361 22.4615 0.5 26.1754 0.5H261.825C265.539 0.5 269.024 2.29361 271.183 5.31576L287.386 28L271.183 50.6842C269.024 53.7064 265.539 55.5 261.825 55.5H26.1754C22.4615 55.5 18.9762 53.7064 16.8175 50.6842L0.614452 28L16.8175 5.31576Z" />
        </svg>
      </div>
      <div className={styles.answer__body}>{children}</div>
    </button>
  );
};

export default AnswerButton;
