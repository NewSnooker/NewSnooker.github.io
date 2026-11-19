"use client";

import { useState } from "react";
import { BookOpen, Brain, Database, LayoutGrid, Layers, Palette, Smartphone, Wrench, type LucideIcon } from "lucide-react";
import { skillGroups, type SkillGroupId } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

const groupIcons: Record<SkillGroupId, LucideIcon> = {
  frontend: LayoutGrid,
  backend: Layers,
  mobile: Smartphone,
  database: Database,
  tools: Wrench,
  design: Palette,
  ai: Brain,
  learning: BookOpen,
};

const badge = (name: string) => {
  const letters = name.replace(/[^A-Za-z0-9]/g, "");
  return letters.slice(0, 2) || name.slice(0, 2);
};

export function Skills() {
  const [activeId, setActiveId] = useState<SkillGroupId>(skillGroups[0].id);
  const active = skillGroups.find((group) => group.id === activeId) ?? skillGroups[0];

  return (
    <section id="stack" className="py-14">
      <SectionHeading index="01" eyebrow="ทักษะ" title="เครื่องมือที่ใช้ทำงาน" aside="ใช้จริงในโปรเจกต์ที่ทำมา" />

      <div role="tablist" aria-label="หมวดทักษะ" className="-mx-4 flex overflow-x-auto border-b border-border px-4 sm:mx-0 sm:px-0">
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.id];
          const selected = group.id === activeId;
          return (
            <button
              key={group.id}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="skills-panel"
              onClick={() => setActiveId(group.id)}
              className={`-mb-px flex shrink-0 items-center gap-2 border-b-2 px-2.5 py-3 text-[12px] transition-colors sm:px-3 ${
                selected ? "border-foreground text-foreground" : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              <Icon className="size-4" aria-hidden />
              {group.label}
              <span className="rounded border border-border px-1.5 text-[10px] tabular-nums text-faint">{group.items.length}</span>
            </button>
          );
        })}
      </div>

      <ul id="skills-panel" role="tabpanel" className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {active.items.map((item) => (
          <li key={item} className="flex items-center gap-4 rounded-md border border-border bg-surface px-4 py-4">
            <span
              aria-hidden
              className="grid size-[30px] shrink-0 place-items-center rounded-md bg-accent-soft text-[11px] font-semibold text-accent"
            >
              {badge(item)}
            </span>
            <span className="text-[13px]">{item}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-[11px] text-faint">เรียนรู้อยู่เสมอ และเพิ่มเครื่องมือใหม่ไปเรื่อยๆ</p>
    </section>
  );
}
