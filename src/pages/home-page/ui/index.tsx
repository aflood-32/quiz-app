import React from "react";
import InfoSection from "@widgets/info-section";

const HomePage = () => {
  return (
    <InfoSection
      title={`Who wants to be \na millionaire?`}
      buttonLabel="Start"
      href="/"
    />
  );
};

export default HomePage;
