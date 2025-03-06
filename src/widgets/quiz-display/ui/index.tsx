import { memo, PropsWithChildren } from "react";

import { H2 } from "@ui/Typography";

import styles from "./styles.module.css";

type QuizDisplayProps = PropsWithChildren & {
  title: string;
};

const QuizDisplay = ({ title, children }: QuizDisplayProps) => {
  return (
    <main className={styles.quiz__block}>
      <div className={styles.quiz__section}>
        <H2>{title}</H2>
      </div>
      <div
        className={[styles.quiz__section, styles.quiz__section_buttons].join(
          " ",
        )}
      >
        <div className={styles.quiz__scrollable}>{children}</div>
      </div>
    </main>
  );
};

export default memo(QuizDisplay);
