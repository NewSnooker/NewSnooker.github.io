"use client";

import { useState } from "react";
import { categoryLabels, projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

type Filter = "all" | ProjectCategory;

const filters: Filter[] = ["all", "web", "mobile", "game", "design", "mini"];

const filterLabel = (filter: Filter) => (filter === "all" ? "ทั้งหมด" : categoryLabels[filter]);

export function Work() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="02" title="ผลงาน" description={`${projects.length} โปรเจกต์`} />

      <div role="tablist" aria-label="กรองผลงานตามประเภท" className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => {
          const count = item === "all" ? projects.length : projects.filter((p) => p.category === item).length;
          const selected = item === filter;
          return (
            <button
              key={item}
              role="tab"
              type="button"
              aria-selected={selected}
              onClick={() => setFilter(item)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                selected
                  ? "border-accent bg-accent text-white"
                  : "border-border text-muted hover:border-accent/60 hover:text-foreground"
              }`}
            >
              {filterLabel(item)} <span className="tabular-nums opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      {shown.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border px-6 py-16 text-center">
          <p className="font-medium">กำลังเพิ่มผลงานในหมวด {filterLabel(filter)}</p>
          <p className="mt-1 text-sm text-muted">ระหว่างนี้ดูผลงานหมวดอื่นได้ก่อน</p>
          <button
            type="button"
            onClick={() => setFilter("all")}
            className="mt-5 rounded-lg border border-border px-4 py-2 text-sm hover:border-accent hover:text-accent"
          >
            ดูผลงานทั้งหมด
          </button>
        </div>
      )}
    </section>
  );
}
