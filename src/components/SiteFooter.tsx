import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "เกี่ยวกับ" },
  { href: "#work", label: "ผลงาน" },
  { href: "#stack", label: "ทักษะ" },
  { href: "#experience", label: "ประสบการณ์" },
  { href: "#education", label: "การศึกษา" },
];

export function SiteFooter() {
  return (
    <footer className="band band-footer">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 xl:px-0">
        <div className="flex flex-col gap-4 border-t border-border py-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.nameEn}
          </p>
          <nav aria-label="ลิงก์ท้ายเว็บ">
            <ul className="flex flex-wrap gap-5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="underline-offset-4 hover:text-foreground hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#top"
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  กลับขึ้นด้านบน ↑
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
