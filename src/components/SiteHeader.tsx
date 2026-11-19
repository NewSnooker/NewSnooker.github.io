import Link from "next/link";
import { profile } from "@/data/profile";

const links = [
  { href: "/#skills", label: "ทักษะ" },
  { href: "/#work", label: "ผลงาน" },
  { href: "/#experience", label: "ประสบการณ์" },
  { href: "/#education", label: "การศึกษา" },
  { href: "/#contact", label: "ติดต่อ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-accent focus:px-3 focus:py-1.5 focus:text-white"
      >
        ข้ามไปที่เนื้อหา
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight">
          {profile.nameEn}
          <span className="text-accent">.</span>
        </Link>
        <nav aria-label="เมนูหลัก" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/#contact"
          className="rounded-full border border-accent/40 bg-accent-soft px-3.5 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-white"
        >
          กำลังหาที่ฝึกงาน
        </Link>
      </div>
    </header>
  );
}
