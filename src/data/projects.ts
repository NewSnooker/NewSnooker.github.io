export type ProjectCategory = "web" | "mobile" | "game" | "design" | "mini";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: number;
  status: "done" | "in-progress";
  // How the work was done. For team work, say what *you* did.
  // Leave out until confirmed. For team work, say what *you* did in `role`.
  team?: { kind: "solo" } | { kind: "team"; size: number; role?: string };
  context?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repos: { label: string; url: string }[];
  demo?: string;
  // Paths under public/, e.g. "/images/projects/acne-ai/cover.png".
  cover?: string;
  gallery?: string[];
  featured?: boolean;
};

export const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web",
  mobile: "Mobile",
  game: "Game",
  design: "Design",
  mini: "Mini Projects",
};

const gh = (repo: string) => `https://github.com/NewSnooker/${repo}`;

export const projects: Project[] = [
  {
    slug: "acne-ai",
    cover: "/images/projects/acne-ai/cover.jpg",
    gallery: ["/images/projects/acne-ai/01.jpg", "/images/projects/acne-ai/02.jpg", "/images/projects/acne-ai/03.jpg", "/images/projects/acne-ai/04.jpg"],
    title: "AcneAI",
    subtitle: "ระบบตรวจจับและจำแนกชนิดสิวจากภาพถ่ายใบหน้า",
    category: "web",
    year: 2569,
    status: "done",
    team: { kind: "team", size: 2 },
    context: "โครงงานปริญญาตรี",
    summary:
      "เว็บแอปที่ให้ผู้ใช้อัปโหลดภาพใบหน้า แล้วใช้ AI ตรวจจับสิว 6 ชนิด ประเมินความรุนแรง และให้คำแนะนำการดูแลผิวเบื้องต้น",
    highlights: [
      "แยกระบบเป็นเว็บแอป (Next.js) กับ AI Service (FastAPI) ที่สื่อสารกันผ่าน REST API",
      "ใช้โมเดล YOLO ตรวจจับสิว 6 ชนิด และคำนวณระดับความรุนแรงจากผลตรวจ",
      "รันทั้งระบบ (เว็บ, AI, ฐานข้อมูล) ได้ในคำสั่งเดียวด้วย Docker Compose",
      "มีระบบผู้ดูแล สำหรับจัดการผู้ใช้ สลับโมเดล AI และดูสถิติการใช้งาน",
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "YOLO", "MongoDB", "Prisma", "Auth.js", "Docker Compose"],
    repos: [],
    demo: "https://acne-web.calmsand-e76a4fc0.japaneast.azurecontainerapps.io",
    featured: true,
  },
  {
    slug: "project-management-system",
    cover: "/images/projects/project-management-system/cover.jpg",
    gallery: ["/images/projects/project-management-system/01.jpg", "/images/projects/project-management-system/02.jpg"],
    title: "ระบบบริหารจัดการโปรเจกต์",
    subtitle: "Project Management System",
    category: "web",
    year: 2568,
    status: "done",
    context: "โครงงาน ปวส. · ต่อยอดจาก Next.js starter kit",
    summary:
      "ระบบจัดการโปรเจกต์ งาน ลูกค้า ใบแจ้งหนี้ และการชำระเงิน มีบอร์ดงานแบบลากวาง (Kanban) สำหรับติดตามสถานะงาน",
    highlights: [
      "บอร์ด Kanban ลากการ์ดงานข้ามคอลัมน์ รอทำ / กำลังทำ / เสร็จแล้ว และบันทึกสถานะลงฐานข้อมูล",
      "ล็อกอินด้วย Google / GitHub และส่งอีเมลแจ้งเตือน",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "MongoDB", "NextAuth", "Vercel"],
    repos: [{ label: "Code", url: gh("it-udvc-pms") }],
    demo: "https://it-udvc-pms.vercel.app",
    featured: true,
  },
  {
    slug: "library-management-system",
    cover: "/images/projects/library-management-system/cover.jpg",
    gallery: ["/images/projects/library-management-system/01.jpg", "/images/projects/library-management-system/02.jpg"],
    title: "ระบบห้องสมุด",
    subtitle: "Library Management System",
    category: "web",
    year: 2567,
    status: "done",
    summary: "ระบบยืม-คืนหนังสือ รายการหนังสือโปรด และหลังบ้านสำหรับผู้ดูแลจัดการหนังสือ หมวดหมู่ และแบนเนอร์",
    highlights: [
      "ระบบยืม-คืนพร้อมประวัติการยืม",
      "หลังบ้านสำหรับผู้ดูแล จัดการหนังสือ หมวดหมู่ และแบนเนอร์",
      "ล็อกอินด้วยอีเมลและรหัสผ่านผ่าน NextAuth",
    ],
    stack: ["Next.js", "Prisma", "MongoDB", "NextAuth", "Redux Toolkit", "TanStack Query"],
    repos: [{ label: "Code", url: gh("library_management_system") }],
    demo: "https://library-management-system-kohl.vercel.app",
    featured: true,
  },
  {
    slug: "snooker-g",
    title: "Snooker G",
    subtitle: "ระบบเกมแยก Backend / Frontend",
    category: "web",
    year: 2568,
    status: "done",
    summary: "เว็บแอปเกม แยก REST API ฝั่ง Backend ออกจากหน้าเว็บ มีระบบผู้ใช้หลายระดับ ห้องเกม คะแนน และรีวิว",
    highlights: [
      "REST API ด้วย Elysia แบ่งสิทธิ์ผู้ใช้ 3 ระดับ พร้อมเอกสาร API (Swagger)",
      "ยืนยันตัวตนด้วย JWT และ Google Login",
      "บันทึก log และมีงานตั้งเวลาอัตโนมัติ (cron)",
    ],
    stack: ["Elysia", "Prisma", "MongoDB", "JWT", "Swagger", "Next.js", "Zustand", "TanStack Query"],
    repos: [
      { label: "Backend", url: gh("snooker_g_server") },
      { label: "Frontend", url: gh("snooker_g_fontend") },
    ],
  },
  {
    slug: "e-commerce-flutter",
    title: "E-commerce App",
    subtitle: "แอปร้านค้าออนไลน์ด้วย Flutter",
    category: "mobile",
    year: 2567,
    status: "done",
    summary: "หน้าตาแอปร้านค้าออนไลน์บนมือถือ มีเมนูด้านล่างสำหรับสลับหน้า",
    highlights: ["ออกแบบหน้าแอปด้วย Widget ของ Flutter", "แถบเมนูด้านล่างแบบเคลื่อนไหว"],
    stack: ["Flutter", "Dart"],
    repos: [{ label: "Code", url: gh("e-commerce-flutter-app") }],
  },
  {
    slug: "contact-phone-flutter",
    title: "Contact Phone App",
    subtitle: "แอปรายชื่อติดต่อด้วย Flutter",
    category: "mobile",
    year: 2567,
    status: "done",
    summary: "แอปบันทึกรายชื่อติดต่อ เก็บข้อมูลไว้ในเครื่อง และกดโทรออกได้จากในแอป",
    highlights: ["บันทึกข้อมูลในเครื่องด้วย shared_preferences", "เปิดหน้าโทรออกด้วย url_launcher"],
    stack: ["Flutter", "Dart"],
    repos: [{ label: "Code", url: gh("flutter_contact_phone") }],
  },
  {
    slug: "full-stack-docker",
    title: "Full-stack Docker",
    subtitle: "แอป React + Express + MongoDB ใน Docker",
    category: "mini",
    year: 2568,
    status: "done",
    summary: "ฝึกรันแอปแบบ Full-stack ทั้ง Frontend, Backend และฐานข้อมูลด้วย Docker Compose",
    highlights: ["แยก container ของ client และ server", "เชื่อมต่อกันผ่าน Docker network"],
    stack: ["Docker", "Docker Compose", "React", "Express", "MongoDB"],
    repos: [{ label: "Code", url: gh("full-stack-docker") }],
  },
  {
    slug: "daily-weather",
    title: "Daily Weather",
    subtitle: "เว็บพยากรณ์อากาศ",
    category: "mini",
    year: 2567,
    status: "done",
    summary: "เว็บดูสภาพอากาศ ดึงข้อมูลจาก OpenWeatherMap API",
    highlights: ["ฝึกเรียกข้อมูลจาก API ภายนอกและแสดงผล"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "OpenWeatherMap API"],
    repos: [{ label: "Code", url: gh("DailyWeather") }],
  },
  {
    slug: "react-movie",
    title: "React Movie",
    subtitle: "เว็บค้นหาภาพยนตร์",
    category: "mini",
    year: 2567,
    status: "done",
    summary: "เว็บแสดงรายการภาพยนตร์จาก TMDB API พร้อมลิงก์ไปดูตัวอย่างหนัง",
    highlights: ["ฝึกดึงข้อมูลจาก API และแสดงผลเป็นรายการ"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "TMDB API"],
    repos: [{ label: "Code", url: gh("react_movie") }],
  },
  {
    slug: "supabase-realtime-chat",
    cover: "/images/projects/supabase-realtime-chat/cover.jpg",
    title: "Realtime Chat",
    subtitle: "แชทแบบเรียลไทม์ด้วย Supabase",
    category: "web",
    year: 2567,
    status: "done",
    summary:
      "เว็บแชทที่ผู้ใช้สมัครสมาชิกและเข้าสู่ระบบได้ สร้างห้องแชท ส่งข้อความและรูปภาพ โดยข้อความใหม่ขึ้นทันทีโดยไม่ต้องรีเฟรช",
    highlights: [
      "เข้าสู่ระบบด้วยอีเมล/รหัสผ่าน (ยืนยันอีเมลตอนสมัคร) หรือบัญชี GitHub ผ่าน Supabase Auth",
      "รับข้อความใหม่แบบเรียลไทม์ด้วย Supabase Realtime (postgres_changes) แยกตามห้อง",
      "อัปโหลดรูปภาพในแชทไปเก็บที่ Supabase Storage",
    ],
    stack: ["React", "Vite", "Supabase", "Tailwind CSS", "DaisyUI", "Vercel"],
    repos: [{ label: "Code", url: gh("supabase_auth_realtime") }],
    demo: "https://supabase-auth-realtime-chat.vercel.app",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const teamLabel = (team: NonNullable<Project["team"]>) =>
  team.kind === "solo" ? "ทำเดี่ยว" : `ทีม ${team.size} คน`;
