import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.nameEn}
        </p>
        <a href="#top" className="hover:text-foreground">
          กลับขึ้นด้านบน ↑
        </a>
      </div>
    </footer>
  );
}
