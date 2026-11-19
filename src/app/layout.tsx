import type { Metadata } from "next";
import { Anuphan, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["500", "600", "700"] });
const anuphan = Anuphan({ variable: "--font-anuphan", subsets: ["thai"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: `${profile.name} | พอร์ตโฟลิโอ`,
  description: `${profile.role} · ${profile.location}`,
  icons: { icon: "/favicon.ico" },
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
