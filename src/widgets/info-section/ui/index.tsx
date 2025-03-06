"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import PrimaryButton from "@ui/PrimaryButton";
import { H1 } from "@ui/Typography";

import { buttonStyles, imageStyles } from "./styles";
import styles from "./styles.module.css";

type InfoSectionProps = {
  title?: string;
  buttonLabel: string;
  href: string;
  label?: string;
  withBgImage?: boolean;
  withImage?: boolean;
  withBg?: boolean;
};

const InfoSection = ({
  title,
  buttonLabel,
  href,
  label,
  withBgImage,
  withImage,
  withBg,
}: InfoSectionProps) => {
  return (
    <main
      className={styles.info}
      data-background-image={withBgImage}
      data-background={withBg}
    >
      <div className={styles.info__block}>
        {withImage && (
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
        )}
        <div
          className={[styles.info__section, styles.info__section_text].join(
            " ",
          )}
        >
          <div className={styles.info__section_text_holder}>
            <div className={styles.info__label}>{label}</div>
            <H1>{title}</H1>
          </div>
          <Link prefetch href={href} className={styles.info__link}>
            <PrimaryButton style={buttonStyles}>{buttonLabel}</PrimaryButton>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default InfoSection;
