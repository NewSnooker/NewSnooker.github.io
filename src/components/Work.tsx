"use client";

import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ExternalLink, Search } from "lucide-react";
import { categoryLabels, projects, type Project, type ProjectCategory } from "@/data/projects";
import { GithubIcon } from "./icons";
import { ProjectCover } from "./ProjectCover";
import { Pagination } from "./Pagination";
import { ProjectModal } from "./ProjectModal";
import { SectionHeading } from "./SectionHeading";

type Filter = "all" | ProjectCategory;

const filters: Filter[] = ["all", "web", "mobile", "game", "design", "mini"];

const PAGE_SIZE = 4;

const filterLabel = (filter: Filter) => (filter === "all" ? "ทั้งหมด" : categoryLabels[filter]);

const matches = (project: Project, query: string) => {
  const text = [project.title, project.subtitle, project.summary, ...project.stack].join(" ").toLowerCase();
  return text.includes(query.trim().toLowerCase());
};

export function Work() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Project | null>(null);
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  const shown = projects.filter(
    (project) => (filter === "all" || project.category === filter) && (query.trim() === "" || matches(project, query)),
  );

  const pageCount = Math.max(1, Math.ceil(shown.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = shown.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const goToPage = (next: number) => {
    setPage(next);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="work" ref={sectionRef} className="py-14">
      <SectionHeading index="02" eyebrow="ผลงาน" title="ไอเดียที่ทำให้ใช้งานได้จริง" aside="งานบางส่วนที่สนุกกับการสร้าง" />

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" aria-label="กรองผลงานตามประเภท" className="flex flex-wrap gap-1">
          {filters.map((item) => {
            const selected = item === filter;
            return (
              <button
                key={item}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => {
                  setFilter(item);
                  setPage(1);
                }}
                className={`rounded-md px-3 py-2 text-[12px] transition-colors ${
                  selected ? "bg-surface-2 text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {filterLabel(item)}
              </button>
            );
          })}
        </div>
        <label className="flex items-center gap-2 text-[12px] text-muted sm:w-52">
          <Search className="size-4 shrink-0" aria-hidden />
          <span className="sr-only">ค้นหาโปรเจกต์</span>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder="ค้นหาโปรเจกต์..."
            className="w-full bg-transparent py-2 text-foreground placeholder:text-faint focus:outline-none"
          />
        </label>
      </div>

      {shown.length > 0 ? (
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {visible.map((project) => (
            <article key={project.slug} className="group">
              <button
                type="button"
                onClick={() => setOpen(project)}
                aria-label={`ดูรายละเอียด ${project.title}`}
                className="block w-full overflow-hidden rounded-xl border border-border transition-colors hover:border-faint"
              >
                <ProjectCover project={project} />
              </button>
              <div className="mt-6 flex items-center justify-between text-[11px] text-muted">
                <span>{categoryLabels[project.category]}</span>
                <span className="tabular-nums">{project.year}</span>
              </div>
              <div className="mt-2 flex items-start justify-between gap-4">
                <h3 className="font-display text-[18px] font-semibold tracking-[-0.01em]">
                  <button type="button" onClick={() => setOpen(project)} className="text-left hover:text-accent">
                    {project.title}
                  </button>
                </h3>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted transition-colors group-hover:text-accent" aria-hidden />
              </div>
              <p className="mt-2 text-[13px] leading-[1.8] text-muted">{project.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="เครื่องมือที่ใช้">
                {project.stack.slice(0, 6).map((tool) => (
                  <li key={tool} className="rounded border border-border px-2 py-1 text-[10px] text-muted">
                    {tool}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-6 text-[12px]">
                <button type="button" onClick={() => setOpen(project)} className="flex items-center gap-2 hover:text-accent">
                  ดูรายละเอียด
                  <ArrowRight className="size-3.5" aria-hidden />
                </button>
                {project.repos.map((repo) => (
                  <a key={repo.url} href={repo.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent">
                    <GithubIcon />
                    {repo.label}
                  </a>
                ))}
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent">
                    Live demo
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      ) : null}
      {shown.length > 0 ? (
        <Pagination page={currentPage} pageCount={pageCount} onChange={goToPage} />
      ) : (
        <div className="rounded-md border border-dashed border-border px-6 py-16 text-center">
          <p className="text-[14px]">
            {query.trim() ? `ไม่พบโปรเจกต์ที่ตรงกับ "${query}"` : `กำลังเพิ่มผลงานในหมวด ${filterLabel(filter)}`}
          </p>
          <button
            type="button"
            onClick={() => {
              setFilter("all");
              setQuery("");
              setPage(1);
            }}
            className="mt-4 rounded-md border border-border bg-surface px-4 py-2 text-[12px] hover:border-faint"
          >
            ดูผลงานทั้งหมด
          </button>
        </div>
      )}

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
