import Image from "next/image";
import { skillIcons } from "./skillIcons";

type StackTagsProps = {
  items: string[];
  className?: string;
};

export function StackTags({ items, className = "" }: StackTagsProps) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label="เครื่องมือที่ใช้">
      {items.map((tool) => {
        const entry = skillIcons[tool];
        return (
          <li key={tool} className="flex items-center gap-1.5 rounded-md border border-border px-2 py-1 text-[12px] text-muted">
            {entry && "image" in entry ? (
              <Image src={entry.image} alt="" width={14} height={14} className="size-3.5 shrink-0 rounded-full" />
            ) : entry ? (
              <entry.icon aria-hidden className="size-3.5 shrink-0" style={entry.color ? { color: entry.color } : undefined} />
            ) : null}
            {tool}
          </li>
        );
      })}
    </ul>
  );
}
