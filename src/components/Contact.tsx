import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="py-14">
      <div className="flex flex-col gap-8 rounded-xl border border-border bg-surface p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">05 / ติดต่อ</p>
          <h2 className="mt-4 font-display text-[28px] font-semibold leading-tight tracking-[-0.02em] sm:text-[34px]">
            เริ่มจากการพูดคุยกัน<span className="text-accent">.</span>
          </h2>
          <p className="mt-3 text-[13px] text-muted">
            กำลังหาที่ฝึกงาน Software Developer <span className="whitespace-nowrap">ช่วง {profile.internshipPeriod}</span>
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-3 md:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-6 rounded-md bg-accent px-5 py-3 text-[13px] font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            ส่งอีเมล
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
          <p className="flex items-center gap-1.5 text-[11px] text-muted">
            <MapPin className="size-3.5" aria-hidden />
            {profile.location}, ประเทศไทย
          </p>
        </div>
      </div>
    </section>
  );
}
