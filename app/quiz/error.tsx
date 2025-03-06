"use client";

import { useEffect } from "react";
import { InfoSection } from "@widgets/info-section";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <InfoSection
      label={`An unexpected error occurred. \nPlease try again later or \ncontact support if the issue persists.`}
      href="/"
      buttonLabel="Home"
      withBg
    />
  );
}
