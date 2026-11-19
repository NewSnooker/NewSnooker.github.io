import { education } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="py-14">
      <SectionHeading index="04" eyebrow="การศึกษา" title="การศึกษา" />
      <ol className="space-y-10">
        {education.map((item) => (
          <li key={item.school} className="grid gap-4 md:grid-cols-[230px_1fr]">
            <p className="flex items-center gap-3 self-start text-[12px] text-muted">
              <span aria-hidden className="grid size-4 place-items-center rounded-full bg-accent-soft">
                <span className="size-2 rounded-full bg-accent" />
              </span>
              {item.period}
            </p>
            <div>
              <h3 className="font-display text-[17px] font-semibold tracking-[-0.01em]">{item.degree}</h3>
              <p className="mt-1 text-[12px] text-muted">
                {item.school}
                {item.note ? ` · ${item.note}` : ""}
              </p>
              <p className="mt-3 text-[13px] leading-[1.8] text-muted">{item.details.join(" · ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
