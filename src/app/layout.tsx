import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${profile.name} | พอร์ตโฟลิโอ`,
  description: `${profile.role} · ${profile.location}`,
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={anuphan.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
