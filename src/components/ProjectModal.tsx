"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";
import { categoryLabels, teamLabel, type Project, statusLabels } from "@/data/projects";
import { GithubIcon } from "./icons";
import { ImageCarousel } from "./ImageCarousel";
import { ProjectCover } from "./ProjectCover";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

// Native <dialog>: Esc closes it, focus stays inside, and the page behind is inert.
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  const facts = project
    ? [
        { label: "ประเภท", value: categoryLabels[project.category] },
        ...(statusLabels[project.status] ? [{ label: "สถานะ", value: statusLabels[project.status] as string }] : []),
        ...(project.team ? [{ label: "รูปแบบงาน", value: teamLabel(project.team) }] : []),
        ...(project.team?.kind === "team" && project.team.role ? [{ label: "ส่วนที่ทำ", value: project.team.role }] : []),
        ...(project.context ? [{ label: "ที่มา", value: project.context }] : []),
      ]
    : [];

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        // A click on the backdrop lands on the <dialog> element itself.
        if (event.target === dialogRef.current) onClose();
      }}
      aria-labelledby="project-modal-title"
      className="m-auto max-h-[90vh] w-[min(760px,calc(100vw-2rem))] overflow-y-auto rounded-xl border border-border bg-popup p-0 text-foreground shadow-2xl"
    >
      {project ? (
        <article>
          <div className="relative overflow-hidden border-b border-border">
            {project.cover ? (
              <ImageCarousel images={[project.cover, ...(project.gallery ?? [])]} alt={project.title} />
            ) : (
              <ProjectCover project={project} priority />
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="ปิด"
              className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-border bg-background/90 transition-colors hover:border-faint"
            >
              <X className="size-4" aria-hidden />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between text-[13px] text-muted">
              <span>{categoryLabels[project.category]}{statusLabels[project.status] ? ` · ${statusLabels[project.status]}` : ""}</span>
              <span className="tabular-nums">{project.year}</span>
            </div>
            <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h3 id="project-modal-title" className="font-display text-[26px] font-semibold tracking-[-0.02em]">
                  {project.title}
                </h3>
                <p className="text-[16px] text-muted">{project.subtitle}</p>
                {project.subtitleEn ? <p className="text-[14px] text-faint">{project.subtitleEn}</p> : null}
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
                {project.repos.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-md border border-border bg-surface px-3.5 py-2.5 text-[14px] font-medium transition-colors hover:border-faint hover:bg-surface-2"
                  >
                    <GithubIcon />
                    {repo.label}
                  </a>
                ))}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-md border border-accent bg-accent px-3.5 py-2.5 text-[14px] font-medium text-accent-ink transition-opacity hover:opacity-85"
                  >
                    {project.demoLabel ?? "Live site"}
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                ) : null}
                {project.links?.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-md border border-border bg-surface px-3.5 py-2.5 text-[14px] font-medium transition-colors hover:border-faint hover:bg-surface-2"
                  >
                    {link.label}
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                ))}
                {project.repos.length === 0 && project.category !== "design" && project.category !== "game" ? <span className="text-[14px] text-muted">Private repository</span> : null}
              </div>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 rounded-lg border border-border bg-surface p-4 sm:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[12px] uppercase tracking-[0.04em] text-faint">{fact.label}</dt>
                  <dd className="mt-0.5 text-[14px]">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-[16px] leading-[1.9] text-foreground/90">{project.summary}</p>

            {project.learned?.length ? (
              <>
                <h4 className="mt-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">สิ่งที่ได้เรียนรู้</h4>
                <ul className="mt-3 space-y-2">
                  {project.learned.map((item) => (
                    <li key={item} className="flex gap-3 text-[16px] leading-[1.8] text-muted">
                      <span aria-hidden className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            <h4 className="mt-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">จุดเด่น</h4>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-[1.8] text-muted">
                  <span aria-hidden className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="เครื่องมือที่ใช้">
              {project.stack.map((tool) => (
                <li key={tool} className="rounded border border-border px-2 py-1 text-[12px] text-muted">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ) : null}
    </dialog>
  );
}
