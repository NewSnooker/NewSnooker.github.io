"use client";

import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ExternalLink, Search, X } from "lucide-react";
import { categoryLabels, projects, type Project, type ProjectCategory, statusLabels } from "@/data/projects";
import { GithubIcon } from "./icons";
import { ProjectCover } from "./ProjectCover";
import { Pagination } from "./Pagination";
import { ProjectModal } from "./ProjectModal";
import { SectionHeading } from "./SectionHeading";

type Filter = "all" | ProjectCategory;

const filters: Filter[] = ["all", "web", "mobile", "game", "design"];

const PAGE_SIZE = 4;

const filterLabel = (filter: Filter) => (filter === "all" ? "ทั้งหมด" : categoryLabels[filter]);

const filterCount = (filter: Filter) =>
  filter === "all" ? projects.length : projects.filter((project) => project.category === filter).length;

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
                className={`rounded-md px-3 py-2 text-[14px] transition-colors ${
                  selected ? "bg-surface-2 text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {filterLabel(item)}
                <sup className="ml-1 text-[11px] tabular-nums text-faint">{filterCount(item)}</sup>
              </button>
            );
          })}
        </div>
        <label className="flex h-10 items-center gap-2 rounded-lg border border-border bg-surface px-3 text-[14px] text-muted transition-colors hover:border-faint focus-within:border-foreground/60 sm:w-60">
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
            className="w-full bg-transparent py-2 text-foreground placeholder:text-faint focus:outline-none focus-visible:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setPage(1);
              }}
              aria-label="ล้างคำค้นหา"
              className="grid size-6 shrink-0 place-items-center rounded-md text-muted hover:bg-surface-2 hover:text-foreground"
            >
              <X className="size-3.5" aria-hidden />
            </button>
          ) : null}
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
                <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  <ProjectCover project={project} />
                </div>
              </button>
              <div className="mt-6 flex items-center justify-between text-[13px] text-muted">
                <span>{categoryLabels[project.category]}{statusLabels[project.status] ? ` · ${statusLabels[project.status]}` : ""}</span>
                <span className="tabular-nums">{project.year}</span>
              </div>
              <div className="mt-2 flex items-start justify-between gap-4">
                <h3 className="font-display text-[20px] font-semibold tracking-[-0.01em]">
                  <button type="button" onClick={() => setOpen(project)} className="text-left underline-offset-4 hover:underline">
                    {project.title}
                  </button>
                </h3>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted transition-colors group-hover:text-accent" aria-hidden />
              </div>
              <p className="mt-2 text-[16px] leading-[1.8] text-muted">{project.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="เครื่องมือที่ใช้">
                {project.stack.slice(0, 6).map((tool) => (
                  <li key={tool} className="rounded border border-border px-2 py-1 text-[12px] text-muted">
                    {tool}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-6 text-[14px]">
                <button
                  type="button"
                  onClick={() => setOpen(project)}
                  className="group/link flex items-center gap-2 underline-offset-4 hover:underline"
                >
                  ดูรายละเอียด
                  <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden />
                </button>
                {project.repos.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 underline-offset-4 hover:underline"
                  >
                    <GithubIcon />
                    {repo.label}
                  </a>
                ))}
                {project.repos.length === 0 && project.category !== "design" ? (
                  <span className="text-muted">Private repository</span>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link flex items-center gap-2 underline-offset-4 hover:underline"
                  >
                    Live site
                    <ExternalLink
                      className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      aria-hidden
                    />
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
          <p className="text-[16px]">
            {query.trim() ? `ไม่พบโปรเจกต์ที่ตรงกับ "${query}"` : `กำลังเพิ่มผลงานในหมวด ${filterLabel(filter)}`}
          </p>
          <button
            type="button"
            onClick={() => {
              setFilter("all");
              setQuery("");
              setPage(1);
            }}
            className="mt-4 rounded-md border border-border bg-surface px-4 py-2 text-[14px] hover:border-faint"
          >
            ดูผลงานทั้งหมด
          </button>
        </div>
      )}

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
