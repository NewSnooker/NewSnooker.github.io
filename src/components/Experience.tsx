import Image from "next/image";
import { experience } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="03" title="ประสบการณ์ฝึกงาน" />
      <div className="space-y-6">
        {experience.map((job) => (
          <article key={job.company} className="grid gap-6 rounded-2xl border border-border bg-surface p-6 md:grid-cols-[1fr_auto]">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {job.company}
                  <span className="font-normal text-muted">, {job.location}</span>
                </h3>
                <p className="text-sm tabular-nums text-muted">{job.period}</p>
              </div>
              <p className="mt-1 text-accent">{job.position}</p>
              <p className="mt-1 text-sm text-muted">{job.about}</p>
              <ul className="mt-4 space-y-2">
                {job.tasks.map((task) => (
                  <li key={task} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
            {job.image ? (
              <Image
                src={job.image}
                alt={`ภาพจากการฝึกงานที่${job.company}`}
                width={480}
                height={320}
                className="w-full rounded-xl border border-border object-cover md:w-72"
              />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
