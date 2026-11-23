import type { Metadata, Viewport } from "next";
import { Anuphan, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["500", "600", "700"] });
const anuphan = Anuphan({ variable: "--font-anuphan", subsets: ["thai"], weight: ["400", "500", "600", "700"] });

const siteUrl = "https://newsnooker.github.io";
const title = `${profile.nameEn} | Portfolio`;
const description =
  "นักศึกษาไอที สายพัฒนาซอฟต์แวร์ รวมผลงานเว็บ มือถือ และงานออกแบบ AcneAI ระบบจัดการโปรเจกต์ ระบบห้องสมุด พร้อมเครื่องมือที่ใช้ และประสบการณ์ฝึกงาน";

export const metadata: Metadata = {
  // Needed so the relative image path below becomes the absolute URL that link previews require.
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${profile.nameEn} Portfolio`,
    locale: "th_TH",
    title,
    description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `Portfolio ของ ${profile.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#121110",
};

// Applies a saved theme before first paint so there is no flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      data-theme="dark"
      suppressHydrationWarning
      className={`${dmSans.variable} ${manrope.variable} ${anuphan.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
