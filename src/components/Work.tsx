"use client";

import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Search,
  X,
} from "lucide-react";
import {
  categoryLabels,
  projects,
  type Project,
  type ProjectCategory,
  statusLabels,
} from "@/data/projects";
import { GithubIcon } from "./icons";
import { CategoryBadge } from "./CategoryBadge";
import { ProjectCover } from "./ProjectCover";
import { Pagination } from "./Pagination";
import { ProjectModal } from "./ProjectModal";
import { SectionHeading } from "./SectionHeading";

type Filter = "all" | ProjectCategory;

const filters: Filter[] = ["all", "web", "mobile", "design", "game"];

const PAGE_SIZE = 4;

const filterLabel = (filter: Filter) =>
  filter === "all" ? "ทั้งหมด" : categoryLabels[filter];

const featured = projects.filter((project) => project.featured);
const others = projects.filter((project) => !project.featured);

const filterCount = (filter: Filter) =>
  filter === "all"
    ? others.length
    : others.filter((project) => project.category === filter).length;

const matches = (project: Project, query: string) => {
  const text = [
    project.title,
    project.subtitle,
    project.summary,
    ...project.stack,
  ]
    .join(" ")
    .toLowerCase();
  return text.includes(query.trim().toLowerCase());
};

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="group">
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`ดูรายละเอียด ${project.title}`}
        className="block w-full overflow-hidden rounded-xl border border-border transition-colors hover:border-faint"
      >
        <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <ProjectCover project={project} />
        </div>
      </button>
      <div className="mt-6 flex items-center justify-between text-[13px] text-muted">
        <span className="flex items-center gap-2">
          <CategoryBadge category={project.category} />
          {statusLabels[project.status] ? (
            <span>{statusLabels[project.status]}</span>
          ) : null}
        </span>
        <span className="tabular-nums">{project.year}</span>
      </div>
      <div className="mt-2 flex items-start justify-between gap-4">
        <h3 className="font-display text-[20px] font-semibold tracking-[-0.01em]">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-left underline-offset-4 hover:underline"
          >
            {project.title}
          </button>
        </h3>
        <ArrowUpRight
          className="mt-1 size-4 shrink-0 text-muted transition-colors group-hover:text-accent"
          aria-hidden
        />
      </div>
      <p className="mt-2 line-clamp-2 text-[16px] leading-[1.8] text-muted">
        {project.summary}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-6 text-[14px]">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="group/link flex items-center gap-2 underline-offset-4 hover:underline"
        >
          ดูรายละเอียด
          <ArrowRight
            className="size-3.5 transition-transform group-hover/link:translate-x-0.5"
            aria-hidden
          />
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
        {project.repos.length === 0 &&
        project.category !== "design" &&
        project.category !== "game" ? (
          <span className="text-muted">Private repository</span>
        ) : null}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="group/link flex items-center gap-2 underline-offset-4 hover:underline"
          >
            {project.demoLabel ?? "Live site"}
            <ExternalLink
              className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              aria-hidden
            />
          </a>
        ) : null}
        {project.links?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="group/link flex items-center gap-2 underline-offset-4 hover:underline"
          >
            {link.label}
            <ExternalLink
              className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              aria-hidden
            />
          </a>
        ))}
      </div>
    </article>
  );
}

export function Work() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Project | null>(null);
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  const shown = others.filter(
    (project) =>
      (filter === "all" || project.category === filter) &&
      (query.trim() === "" || matches(project, query)),
  );

  const pageCount = Math.max(1, Math.ceil(shown.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = shown.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const goToPage = (next: number) => {
    setPage(next);
    moreRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="work">
      {/* Dark band in light mode. The popup stays outside it so it keeps the page theme. */}
      <div data-theme="dark" className="band band-dark pb-14 pt-4 text-foreground">
        <SectionHeading
          index="01"
          eyebrow="ผลงาน"
          title="ไอเดียที่ทำให้ใช้งานได้จริง"
          aside="ผลงานหลัก"
        />

        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={setOpen}
            />
          ))}
        </div>

        <div
          ref={moreRef}
          className="mt-14 scroll-mt-24 border-t border-border pt-8"
        >
          <button
            type="button"
            onClick={() => setShowMore((value) => !value)}
            aria-expanded={showMore}
            aria-controls="more-work"
            className="mx-auto flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-[14px] transition-colors hover:border-faint hover:bg-surface-2"
          >
            {showMore
              ? "ซ่อนผลงานเพิ่มเติม"
              : `ดูผลงานเพิ่มเติม (${others.length})`}
            <ChevronDown
              className={`size-4 transition-transform ${showMore ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
        </div>

        {showMore ? (
          <div id="more-work" className="mt-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div
                role="tablist"
                aria-label="กรองผลงานตามประเภท"
                className="flex flex-wrap gap-1"
              >
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
                        selected
                          ? "bg-surface-2 text-foreground"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {filterLabel(item)}
                      <sup className="ml-1 text-[11px] tabular-nums text-faint">
                        {filterCount(item)}
                      </sup>
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
              <>
                <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
                  {visible.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      onOpen={setOpen}
                    />
                  ))}
                </div>
                <Pagination
                  page={currentPage}
                  pageCount={pageCount}
                  onChange={goToPage}
                />
              </>
            ) : (
              <div className="rounded-md border border-dashed border-border px-6 py-16 text-center">
                <p className="text-[16px]">
                  {query.trim()
                    ? `ไม่พบโปรเจกต์ที่ตรงกับ "${query}"`
                    : `กำลังเพิ่มผลงานในหมวด ${filterLabel(filter)}`}
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
          </div>
        ) : null}
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
