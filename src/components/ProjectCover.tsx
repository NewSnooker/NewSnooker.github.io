import Image from "next/image";
import type { Project } from "@/data/projects";

// Shows the project's cover image, or a labelled placeholder until one is added.
export function ProjectCover({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (project.cover) {
    return (
      <Image
        src={project.cover}
        alt={`ภาพหน้าจอ ${project.title}`}
        width={1600}
        height={900}
        priority={priority}
        className="aspect-video w-full object-cover"
      />
    );
  }

  return (
    <div className="grid aspect-video w-full place-items-center bg-gradient-to-br from-surface-2 to-background">
      <div className="text-center">
        <p className="text-2xl font-bold tracking-tight text-foreground/80">{project.title}</p>
        <p className="mt-1 text-xs text-muted">รอใส่ภาพหน้าจอ</p>
      </div>
    </div>
  );
}
