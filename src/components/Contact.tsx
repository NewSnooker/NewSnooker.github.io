import { ArrowUpRight, Download, MapPin, Phone } from "lucide-react";
import { SiGmail, SiLine } from "react-icons/si";
import { profile } from "@/data/profile";
import { GithubIcon } from "./icons";

// Opens Gmail's compose window in the browser, so it works without a mail app.
const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

type Channel = {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
};

const channels: Channel[] = [
  {
    label: "อีเมล",
    value: profile.email,
    href: composeUrl,
    icon: <SiGmail className="size-4" style={{ color: "#EA4335" }} aria-hidden />,
    external: true,
  },
  {
    label: "โทรศัพท์",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/-/g, "")}`,
    icon: <Phone className="size-4" aria-hidden />,
  },
  ...(profile.line
    ? [
        {
          label: "LINE",
          value: "เพิ่มเพื่อนใน LINE",
          href: profile.line,
          icon: <SiLine className="size-4" style={{ color: "#06C755" }} aria-hidden />,
          external: true,
        },
      ]
    : []),
  {
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
    icon: <GithubIcon />,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-14">
      <div className="rounded-xl border border-border bg-surface p-8 sm:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">05 / ติดต่อ</p>
            <h2 className="mt-4 font-display text-[28px] font-semibold leading-tight tracking-[-0.02em] sm:text-[34px]">
              เริ่มจากการพูดคุยกัน<span className="text-accent">.</span>
            </h2>
            <p className="mt-3 text-[16px] text-muted">
              กำลังหาที่ฝึกงาน Software Developer <span className="whitespace-nowrap">ช่วง {profile.internshipPeriod}</span>
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-3 md:items-center">
            <a
              href={composeUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-6 rounded-md bg-accent px-5 py-3 text-[16px] font-medium text-accent-ink transition-opacity hover:opacity-90"
            >
              ส่งอีเมล
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <p className="flex items-center gap-1.5 text-[13px] text-muted">
              <MapPin className="size-3.5" aria-hidden />
              {profile.location}, ประเทศไทย
            </p>
          </div>
        </div>

        <ul className="mt-8 grid gap-2 border-t border-border pt-8 sm:grid-cols-2">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex items-center gap-3 rounded-lg border border-border bg-surface-2 px-4 py-3 transition-colors hover:border-faint"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-surface">
                  {channel.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] text-muted">{channel.label}</span>
                  <span className="block truncate text-[16px]">{channel.value}</span>
                </span>
                <ArrowUpRight
                  className="size-3.5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            </li>
          ))}
          {profile.resumeUrl ? (
            <li>
              <a
                href={profile.resumeUrl}
                download
                className="group flex items-center gap-3 rounded-lg border border-border bg-surface-2 px-4 py-3 transition-colors hover:border-faint"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-surface">
                  <Download className="size-4" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] text-muted">เรซูเม่</span>
                  <span className="block truncate text-[16px]">ดาวน์โหลดเรซูเม่ (PDF)</span>
                </span>
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </section>
  );
}
