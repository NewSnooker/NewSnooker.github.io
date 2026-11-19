type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="mr-3 text-base font-medium text-accent">{index} /</span>
        {title}
      </h2>
      {description ? <p className="text-sm text-muted">{description}</p> : null}
    </div>
  );
}
