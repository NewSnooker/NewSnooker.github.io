import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-16 sm:px-6 md:grid-cols-[1fr_auto] md:pt-24">
      <div>
        <p className="mb-4 inline-flex items-center gap-2 text-sm text-muted">
          <span className="size-2 rounded-full bg-accent" aria-hidden />
          {profile.location} · ฝึกงาน {profile.internshipPeriod}
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance sm:text-6xl">
          สวัสดีครับ ผม<span className="text-accent">ภานุวัฒน์</span>
        </h1>
        <p className="mt-3 text-xl font-medium text-foreground/90 sm:text-2xl">{profile.role}</p>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted text-pretty">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/#work"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/85"
          >
            ดูผลงาน
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              ดาวน์โหลดเรซูเม่
            </a>
          ) : null}
        </div>
      </div>
      <Image
        src={profile.photo}
        alt={`รูปของ${profile.name}`}
        width={220}
        height={280}
        priority
        className="hidden aspect-[3/4] w-44 rounded-2xl border border-border object-cover md:block lg:w-52"
      />
    </section>
  );
}
