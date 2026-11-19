import Link from "next/link";
import { categoryLabels, teamLabel, type Project } from "@/data/projects";
import { ProjectCover } from "./ProjectCover";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50">
      <Link href={`/projects/${project.slug}/`} aria-label={`ดูรายละเอียด ${project.title}`} className="block overflow-hidden">
        <ProjectCover project={project} />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-medium text-accent">
            {categoryLabels[project.category]}
          </span>
          <span className="tabular-nums">{project.year}</span>
          {project.team ? <span>· {teamLabel(project.team)}</span> : null}
          {project.status === "in-progress" ? <span>· กำลังพัฒนา</span> : null}
        </div>
        <h3 className="mt-3 text-lg font-semibold">
          <Link href={`/projects/${project.slug}/`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="text-sm text-muted">{project.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/85">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="เครื่องมือที่ใช้">
          {project.stack.map((tool) => (
            <li key={tool} className="rounded-md border border-border px-2 py-0.5 text-xs text-muted">
              {tool}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm">
          <Link href={`/projects/${project.slug}/`} className="font-medium text-accent hover:underline">
            ดูรายละเอียด →
          </Link>
          {project.repos.map((repo) => (
            <a key={repo.url} href={repo.url} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground">
              {repo.label}
            </a>
          ))}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground">
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
