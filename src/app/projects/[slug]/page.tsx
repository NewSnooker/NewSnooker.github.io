import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCover } from "@/components/ProjectCover";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { categoryLabels, getProject, projects, teamLabel } from "@/data/projects";
import { profile } from "@/data/profile";

// Static export: every project page is built ahead of time, unknown slugs 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} | ${profile.name}` : profile.name };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const facts = [
    { label: "ประเภท", value: categoryLabels[project.category] },
    { label: "ปี", value: String(project.year) },
    ...(project.team ? [{ label: "รูปแบบงาน", value: teamLabel(project.team) }] : []),
    ...(project.team?.kind === "team" && project.team.role ? [{ label: "ส่วนที่ทำ", value: project.team.role }] : []),
    ...(project.context ? [{ label: "ที่มา", value: project.context }] : []),
    { label: "สถานะ", value: project.status === "done" ? "เสร็จแล้ว" : "กำลังพัฒนา" },
  ];

  return (
    <div id="top">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Link href="/#work" className="text-sm text-muted hover:text-accent">
          ← กลับไปหน้าผลงาน
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-2 text-lg text-muted">{project.subtitle}</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <ProjectCover project={project} priority />
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-surface p-5 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs text-muted">{fact.label}</dt>
              <dd className="mt-0.5 text-sm font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">ภาพรวม</h2>
          <p className="mt-3 leading-relaxed text-foreground/90">{project.summary}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">จุดเด่น</h2>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">เครื่องมือที่ใช้</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tool) => (
              <li key={tool} className="rounded-lg border border-border bg-surface px-3 py-1 text-sm">
                {tool}
              </li>
            ))}
          </ul>
        </section>

        {project.gallery && project.gallery.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">ภาพหน้าจอ</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${project.title} ภาพที่ ${i + 1}`}
                  width={1600}
                  height={900}
                  className="w-full rounded-xl border border-border"
                />
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-12 flex flex-wrap gap-3">
          {project.repos.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent"
            >
              {repo.label} บน GitHub
            </a>
          ))}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent/85"
            >
              เปิดเว็บจริง
            </a>
          ) : null}
          {project.repos.length === 0 ? (
            <p className="self-center text-sm text-muted">โค้ดเป็น repository ส่วนตัว ขอดูได้ตอนสัมภาษณ์</p>
          ) : null}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
