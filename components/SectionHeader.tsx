import { ReactElement, ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  aside?: ReactNode;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  aside,
}: SectionHeaderProps): ReactElement {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div
      className={`flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between ${align === "center" ? "items-center" : ""}`}
    >
      <div className={`max-w-3xl ${alignClass}`}>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-primary text-3xl font-medium leading-tight text-brand-ink sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-sm leading-7 text-brand-body sm:text-base">
            {description}
          </p>
        )}
      </div>
      {aside && <div>{aside}</div>}
    </div>
  );
}
