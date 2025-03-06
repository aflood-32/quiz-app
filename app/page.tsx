import { InfoSection } from "@widgets/info-section";

export default function Home() {
  return (
    <InfoSection
      title={`Who wants to be \na millionaire?`}
      buttonLabel="Start"
      href={`/quiz`}
      withBgImage
      withImage
    />
  );
}
