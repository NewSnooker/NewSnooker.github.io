import Image from "next/image";
import { experience } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-14">
      <SectionHeading index="03" eyebrow="ประสบการณ์" title="ประสบการณ์ฝึกงาน" />
      <ol className="space-y-10">
        {experience.map((job) => (
          <li key={job.company} className="grid gap-4 md:grid-cols-[230px_1fr]">
            <p className="flex items-center gap-3 self-start text-[12px] text-muted">
              <span aria-hidden className="grid size-4 place-items-center rounded-full bg-accent-soft">
                <span className="size-2 rounded-full bg-accent" />
              </span>
              {job.period}
            </p>
            <div>
              <h3 className="font-display text-[17px] font-semibold tracking-[-0.01em]">{job.position}</h3>
              <p className="mt-1 text-[12px] text-muted">
                {job.company}, {job.location}
              </p>
              <p className="mt-3 text-[13px] leading-[1.8] text-muted">{job.about}</p>
              <ul className="mt-3 space-y-1.5">
                {job.tasks.map((task) => (
                  <li key={task} className="flex gap-3 text-[13px] leading-[1.8] text-muted">
                    <span aria-hidden className="mt-[9px] size-1 shrink-0 rounded-full bg-faint" />
                    {task}
                  </li>
                ))}
              </ul>
              {job.image ? (
                <Image
                  src={job.image}
                  alt={`ภาพจากการฝึกงานที่${job.company}`}
                  width={720}
                  height={405}
                  className="mt-5 w-full max-w-md rounded-md border border-border object-cover"
                />
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
