import React from "react";
import Image from "next/image";

import PrimaryButton from "@ui/PrimaryButton";
import { H1 } from "@ui/Typography";

import styles from "./styles.module.css";
import { buttonStyles, imageStyles } from "../lib/styles";
import Link from "next/link";

type InfoSectionProps = {
  title: string;
  buttonLabel: string;
  href: string;
  label?: string;
};

const InfoSection = ({ title, buttonLabel, href }: InfoSectionProps) => {
  return (
    <main className={styles.info}>
      <div className={styles.info__block}>
        <div className={styles.info__section}>
          <div className={styles.info__image_holder}>
            <Image
              priority
              quality={100}
              width={0}
              height={0}
              sizes="100vw"
              style={imageStyles}
              src="/hand.svg"
              alt="Who wants to be a millionaire?"
            />
          </div>
        </div>
        <div
          className={[styles.info__section, styles.info__section_text].join(
            " ",
          )}
        >
          <H1>{title}</H1>
          <Link href={href} className={styles.info__link}>
            <PrimaryButton style={buttonStyles}>{buttonLabel}</PrimaryButton>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default InfoSection;
