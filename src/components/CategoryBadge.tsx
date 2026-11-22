import { categoryLabels, type ProjectCategory } from "@/data/projects";

export function CategoryBadge({ category }: { category: ProjectCategory }) {
  return (
    <span className="rounded-md bg-accent px-2 py-0.5 text-[12px] font-semibold text-accent-ink">{categoryLabels[category]}</span>
  );
}
