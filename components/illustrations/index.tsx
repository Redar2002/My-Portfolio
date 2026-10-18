import type { Illustration } from "@/content/projects";
import type { Locale } from "@/lib/i18n";
import { MeetingIllustration } from "./MeetingIllustration";
import { ForecastIllustration } from "./ForecastIllustration";
import { EtlIllustration } from "./EtlIllustration";
import { ApiIllustration } from "./ApiIllustration";

const map = {
  meeting: MeetingIllustration,
  forecast: ForecastIllustration,
  etl: EtlIllustration,
  api: ApiIllustration,
} satisfies Record<Illustration, (p: { locale: Locale }) => React.JSX.Element>;

export function ProjectIllustration({ kind, locale }: { kind: Illustration; locale: Locale }) {
  const Component = map[kind];
  return <Component locale={locale} />;
}
