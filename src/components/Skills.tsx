"use client";

import { useState } from "react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

const initials = (name: string) => name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2) || name.slice(0, 2);

export function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const active = skillGroups.find((group) => group.id === activeId) ?? skillGroups[0];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="01" title="ทักษะ" description="เครื่องมือที่ใช้ในงานจริง" />

      <div role="tablist" aria-label="หมวดทักษะ" className="-mx-4 flex gap-1 overflow-x-auto border-b border-border px-4 sm:mx-0 sm:px-0">
        {skillGroups.map((group) => {
          const selected = group.id === activeId;
          return (
            <button
              key={group.id}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`skills-${group.id}`}
              onClick={() => setActiveId(group.id)}
              className={`flex shrink-0 items-center gap-2 border-b-2 px-3 py-3 text-sm transition-colors ${
                selected ? "border-accent text-foreground" : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              {group.label}
              <span className="rounded bg-surface-2 px-1.5 text-xs tabular-nums text-muted">{group.items.length}</span>
            </button>
          );
        })}
      </div>

      <ul
        id={`skills-${active.id}`}
        role="tabpanel"
        className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {active.items.map((item) => (
          <li key={item} className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5">
            <span
              aria-hidden
              className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-xs font-semibold text-accent"
            >
              {initials(item)}
            </span>
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
