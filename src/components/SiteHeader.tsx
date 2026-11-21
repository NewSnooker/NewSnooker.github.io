"use client";

import { ArrowUpRight, CodeXml } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "./useActiveSection";

const sections = [
  { id: "stack", label: "ทักษะ" },
  { id: "work", label: "ผลงาน" },
  { id: "experience", label: "ประสบการณ์" },
  { id: "education", label: "การศึกษา" },
  { id: "contact", label: "ติดต่อ" },
];

const navLinks = sections.slice(0, 4);
const sectionIds = sections.map((section) => section.id);

export function SiteHeader() {
  const active = useActiveSection(sectionIds);
  const crumb = sections.find((section) => section.id === active)?.label ?? "dev";

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-accent focus:px-3 focus:py-1.5 focus:text-accent-ink"
      >
        ข้ามไปที่เนื้อหา
      </a>
      <div className="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between gap-4 border-b border-border px-4 sm:px-6 xl:px-0">
        <a href="#top" className="group flex items-center gap-2.5 text-[16px]">
          <CodeXml className="size-5 text-accent transition-transform group-hover:-rotate-6" aria-hidden />
          <span className="font-semibold">newsnooker</span>
          <span className="text-muted">
            /{" "}
            <span key={crumb} className="inline-block animate-[crumb-in_0.25s_ease-out]">
              {crumb}
            </span>
          </span>
        </a>
        <div className="flex items-center gap-3 sm:gap-8">
          <nav aria-label="เมนูหลัก" className="hidden md:block">
            <ul className="flex items-center gap-8 text-[14px]">
              {navLinks.map((link) => {
                const current = link.id === active;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      aria-current={current ? "true" : undefined}
                      className={`relative whitespace-nowrap py-1 transition-colors hover:text-foreground ${
                        current ? "text-foreground" : "text-muted"
                      }`}
                    >
                      {link.label}
                      <span
                        aria-hidden
                        className={`absolute inset-x-0 -bottom-0.5 h-px bg-foreground transition-opacity ${
                          current ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-[14px] transition-colors hover:border-faint"
          >
            ติดต่อ
            <ArrowUpRight
              className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
