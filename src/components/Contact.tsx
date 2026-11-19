import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="05" title="ติดต่อ" />
      <div className="rounded-2xl border border-border bg-gradient-to-br from-surface to-background p-8 sm:p-12">
        <p className="max-w-xl text-2xl font-semibold leading-snug text-balance sm:text-3xl">
          กำลังหาที่ฝึกงานตำแหน่ง Software Developer <span className="whitespace-nowrap">ช่วง {profile.internshipPeriod}</span>
        </p>
        <p className="mt-3 text-muted">ยินดีพูดคุยและสัมภาษณ์ทั้งแบบออนไลน์และที่บริษัท</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/85"
          >
            ส่งอีเมล
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </div>
        <p className="mt-6 text-sm text-muted">{profile.email}</p>
      </div>
    </section>
  );
}
