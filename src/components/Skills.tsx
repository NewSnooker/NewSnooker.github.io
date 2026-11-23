"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { coreSkills, skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";
import { skillIcons } from "./skillIcons";

const totalSkills = new Set(skillGroups.flatMap((group) => group.items)).size;

function SkillChip({ name }: { name: string }) {
  const entry = skillIcons[name];
  return (
    <li className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-[14px] dark:bg-surface-2">
      {entry && "image" in entry ? (
        <Image src={entry.image} alt="" width={16} height={16} className="size-4 shrink-0 rounded-full" />
      ) : entry ? (
        <entry.icon aria-hidden className="size-4 shrink-0" style={entry.color ? { color: entry.color } : undefined} />
      ) : null}
      {name}
    </li>
  );
}

export function Skills() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="stack" className="band band-skills py-14">
      <SectionHeading index="02" eyebrow="ทักษะ" title="เครื่องมือที่ใช้ในการทำงาน" aside="ใช้จริงในโปรเจกต์ที่ทำมา" />

      {/* Both panels stay mounted and animate their height, so the page does not jump when toggling. */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          showAll ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
        }`}
        inert={showAll}
      >
        <div className="overflow-hidden">
          <div className="rounded-xl border border-border bg-surface px-5 py-5">
            <h3 className="text-[14px] text-muted">ใช้บ่อย</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {coreSkills.map((item) => (
                <SkillChip key={item} name={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        id="all-skills"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          showAll ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        inert={!showAll}
      >
        <div className="overflow-hidden">
          <div className="divide-y divide-border rounded-xl border border-border bg-surface">
            {skillGroups.map((group) => (
              <div key={group.label} className="grid gap-3 px-5 py-4 sm:grid-cols-[210px_1fr] sm:items-center">
                <h3 className="flex items-center gap-2 whitespace-nowrap text-[14px] text-muted">
                  {group.label}
                  <span className="rounded border border-border px-1.5 text-[12px] tabular-nums text-faint">{group.items.length}</span>
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <SkillChip key={item} name={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowAll((value) => !value)}
        aria-expanded={showAll}
        aria-controls="all-skills"
        className="mx-auto mt-6 flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-[14px] transition-colors hover:border-faint hover:bg-surface-2"
      >
        {showAll ? "แสดงเฉพาะที่ใช้บ่อย" : `ดูทั้งหมด (${totalSkills})`}
        <ChevronDown className={`size-4 transition-transform ${showAll ? "rotate-180" : ""}`} aria-hidden />
      </button>
    </section>
  );
}
