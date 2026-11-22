"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";
import { teamLabel, type Project, statusLabels } from "@/data/projects";
import { GithubIcon } from "./icons";
import { ImageCarousel } from "./ImageCarousel";
import { CategoryBadge } from "./CategoryBadge";
import { ProjectCover } from "./ProjectCover";
import { StackTags } from "./StackTags";

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

  // Category and status are already in the top line, so only team, role and origin go here.
  const facts = project
    ? [
        ...(project.team ? [teamLabel(project.team)] : []),
        ...(project.team?.kind === "team" && project.team.role ? [`ส่วนที่ทำ: ${project.team.role}`] : []),
        ...(project.context ? [project.context] : []),
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
          <div className="p-6 pb-5 sm:p-8 sm:pb-6">
            <div className="flex items-center justify-between gap-4 text-[13px] text-muted">
              <span className="flex items-center gap-2">
                <CategoryBadge category={project.category} />
                {statusLabels[project.status] ? <span>{statusLabels[project.status]}</span> : null}
                <span className="tabular-nums">{project.year}</span>
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="ปิด"
                className="-mr-2 -mt-2 grid size-9 shrink-0 place-items-center rounded-full border border-border transition-colors hover:border-faint hover:bg-surface-2"
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>
            <div className="mt-1 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
                {project.repos.length === 0 && project.category !== "design" && project.category !== "game" ? (
                  <span className="text-[14px] text-muted">Private repository</span>
                ) : null}
              </div>
            </div>

            <p className="mt-5 text-[16px] leading-[1.9] text-foreground/90">{project.summary}</p>

            {facts.length > 0 ? (
              <p className="mt-3 text-[14px] leading-[1.8] text-muted">{facts.join(" · ")}</p>
            ) : null}
          </div>

          <div className="relative overflow-hidden border-y border-border">
            {project.cover ? (
              <ImageCarousel images={[project.cover, ...(project.gallery ?? [])]} alt={project.title} />
            ) : (
              <ProjectCover project={project} priority />
            )}
          </div>

          <div className="p-6 sm:p-8">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">สิ่งที่พัฒนา</h4>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-[1.8] text-muted">
                  <span aria-hidden className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            {project.learned ? (
              <>
                <h4 className="mt-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">สิ่งที่ได้เรียนรู้</h4>
                <p className="mt-3 text-[16px] leading-[1.8] text-muted">{project.learned}</p>
              </>
            ) : null}

            <StackTags items={project.stack} className="mt-6" />
          </div>
        </article>
      ) : null}
    </dialog>
  );
}
