import { InfoSection } from "@widgets/info-section";
import { getPlayerProgress } from "@entities/player-progress";
import { formatCurrency } from "@shared/lib/format-currency";

export default async function Result() {
  const playerProgress = await getPlayerProgress();

  return (
    <InfoSection
      label={`Total score:`}
      title={`${formatCurrency(playerProgress?.reward || 0, "USD")} earned`}
      href="/"
      buttonLabel="Try again"
      withBg
      withImage
    />
  );
}
