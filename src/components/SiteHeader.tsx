import { ArrowUpRight, CodeXml } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#experience", label: "ประสบการณ์" },
  { href: "#stack", label: "ทักษะ" },
  { href: "#work", label: "ผลงาน" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-accent focus:px-3 focus:py-1.5 focus:text-accent-ink"
      >
        ข้ามไปที่เนื้อหา
      </a>
      <div className="mx-auto flex h-[88px] max-w-[1120px] items-center justify-between gap-4 border-b border-border px-4 sm:px-6 xl:px-0">
        <a href="#top" className="flex items-center gap-2.5 text-[13px]">
          <CodeXml className="size-5 text-accent" aria-hidden />
          <span className="font-semibold">newsnooker</span>
          <span className="text-muted">/ dev</span>
        </a>
        <div className="flex items-center gap-3 sm:gap-8">
          <nav aria-label="เมนูหลัก" className="hidden sm:block">
            <ul className="flex items-center gap-8 text-[12px] text-muted">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-[12px] transition-colors hover:border-faint"
          >
            ติดต่อ
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
