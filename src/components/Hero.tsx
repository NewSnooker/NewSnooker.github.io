import { ArrowDown, ArrowUpRight, Download, FileText, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon } from "./icons";
import { ProfilePhoto } from "./ProfilePhoto";

const outlineButton =
  "group flex min-w-32 items-center justify-between gap-6 rounded-md border border-border bg-surface px-3.5 py-3 text-[12px] transition-colors hover:border-faint";

export function Hero() {
  return (
    <section id="about" className="pb-24 pt-20">
      <div className="flex items-start justify-between gap-6">
        <ProfilePhoto src={profile.photo} alt={`รูปของ${profile.name}`} />
        <p className="mt-5 flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 text-[11px] text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden />
          กำลังมองหาที่ฝึกงาน
        </p>
      </div>

      <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
        Hello, world. I&apos;m Phanuwat.
      </p>
      <h1 className="mt-4 font-display text-[40px] font-semibold leading-[1.18] tracking-[-0.03em] sm:text-[54px]">
        นักพัฒนาซอฟต์แวร์
        <br />
        <span className="text-faint">สาย Full-Stack.</span>
      </h1>

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-[470px]">
          <p className="text-[15px] leading-[1.9] text-muted">{profile.intro}</p>
          <p className="mt-5 flex items-center gap-2 text-[11px] text-muted">
            <MapPin className="size-3.5" aria-hidden />
            {profile.location}, ประเทศไทย · ฝึกงาน {profile.internshipPeriod}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" className={outlineButton}>
            <span className="flex items-center gap-2.5">
              <GithubIcon />
              GitHub
            </span>
            <ArrowUpRight className="size-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </a>
          {profile.resumeUrl ? (
            <a href={profile.resumeUrl} download className={outlineButton}>
              <span className="flex items-center gap-2.5">
                <FileText className="size-4" aria-hidden />
                ดาวน์โหลดเรซูเม่ (PDF)
              </span>
              <Download className="size-3.5 text-muted transition-transform group-hover:translate-y-0.5" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>

      <a href="#work" className="group mt-12 inline-flex items-center gap-3 text-[12px] font-semibold underline-offset-4 hover:underline">
        ดูผลงาน
        <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
      </a>
    </section>
  );
}
