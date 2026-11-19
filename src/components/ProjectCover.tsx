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
        className="aspect-[16/9] w-full object-cover"
      />
    );
  }

  return (
    <div className="grid aspect-[16/9] w-full place-items-center bg-gradient-to-br from-surface-2 via-surface to-surface-2">
      <div className="text-center">
        <p className="font-display text-[22px] font-semibold tracking-tight text-foreground/70">{project.title}</p>
        <p className="mt-1 text-[11px] text-faint">รอใส่ภาพหน้าจอ</p>
      </div>
    </div>
  );
}
