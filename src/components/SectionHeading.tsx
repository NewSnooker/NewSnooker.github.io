type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  aside?: React.ReactNode;
};

export function SectionHeading({ index, eyebrow, title, aside }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">
          {index} / {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-[30px] font-semibold leading-tight tracking-[-0.02em]">
          {title}
          <span className="text-accent">.</span>
        </h2>
      </div>
      {aside ? <div className="text-[14px] text-muted">{aside}</div> : null}
    </div>
  );
}
