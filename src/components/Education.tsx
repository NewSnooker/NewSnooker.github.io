import { education } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="04" title="การศึกษา" />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <article key={item.school} className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-sm tabular-nums text-accent">
              {item.period}
              {item.note ? ` · ${item.note}` : ""}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{item.school}</h3>
            <p className="mt-1 font-medium text-foreground/90">{item.degree}</p>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
