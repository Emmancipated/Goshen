import { useMemo } from "react";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const html = useMemo(() => JSON.stringify(data), [data]);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
