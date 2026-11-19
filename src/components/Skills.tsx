import Image from "next/image";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";
import { skillIcons } from "./skillIcons";

export function Skills() {
  return (
    <section id="stack" className="py-14">
      <SectionHeading index="01" eyebrow="ทักษะ" title="เครื่องมือที่ใช้ในการทำงาน" aside="ใช้จริงในโปรเจกต์ที่ทำมา" />

      <div className="divide-y divide-border rounded-xl border border-border bg-surface">
        {skillGroups.map((group) => (
          <div key={group.label} className="grid gap-3 px-5 py-4 sm:grid-cols-[150px_1fr] sm:items-center">
            <h3 className="flex items-center gap-2 text-[12px] text-muted">
              {group.label}
              <span className="rounded border border-border px-1.5 text-[10px] tabular-nums text-faint">{group.items.length}</span>
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const entry = skillIcons[item];
                return (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-[12px]"
                  >
                    {entry && "image" in entry ? (
                      <Image src={entry.image} alt="" width={16} height={16} className="size-4 shrink-0 rounded-full" />
                    ) : entry ? (
                      <entry.icon aria-hidden className="size-4 shrink-0" style={entry.color ? { color: entry.color } : undefined} />
                    ) : null}
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
