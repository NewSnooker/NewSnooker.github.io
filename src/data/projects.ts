export type ProjectCategory = "web" | "mobile" | "game" | "design";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  // Official English name, shown under the subtitle in the popup.
  subtitleEn?: string;
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
};

const gh = (repo: string) => `https://github.com/NewSnooker/${repo}`;

export const projects: Project[] = [
  {
    slug: "acne-ai",
    cover: "/images/projects/acne-ai/cover.jpg",
    gallery: ["/images/projects/acne-ai/01.jpg", "/images/projects/acne-ai/02.jpg", "/images/projects/acne-ai/03.jpg", "/images/projects/acne-ai/04.jpg", "/images/projects/acne-ai/05.jpg"],
    title: "AcneAI",
    subtitle: "ระบบตรวจจับและจำแนกชนิดสิวจากภาพถ่ายใบหน้าด้วยเทคนิค Object Detection",
    subtitleEn: "Facial Acne Detection and Classification System Using Object Detection",
    category: "web",
    year: 2569,
    status: "done",
    team: { kind: "team", size: 2, role: "ออกแบบและพัฒนาระบบ" },
    context: "โครงงานปริญญาตรี",
    summary:
      "เว็บแอปที่ให้ผู้ใช้อัปโหลดภาพใบหน้า แล้วใช้ AI ตรวจจับสิว 6 ชนิด ประเมินความรุนแรง และให้คำแนะนำการดูแลผิวเบื้องต้น",
    highlights: [
      "แยกระบบเป็นเว็บแอป (Next.js) กับ AI Service (FastAPI) ที่ทำหน้าที่ตรวจภาพอย่างเดียว คุยกันผ่าน REST API และยืนยันกันด้วย API key",
      "ใช้ Ultralytics YOLO เทรนโมเดลจากชุดข้อมูลบน Roboflow Universe เพื่อตรวจจับสิว 6 ชนิด แล้วคำนวณระดับความรุนแรงตามเกณฑ์ที่กำหนดไว้ในเล่มโครงงาน",
      "วัดผลโมเดลด้วยค่า mAP@0.5, Precision, Recall และ F1-score โมเดลที่ใช้งานในระบบได้ mAP@0.5 60.36%",
      "แบ่งสิทธิ์ผู้ใช้กับผู้ดูแลด้วย Auth.js และตรวจสิทธิ์ทั้งที่ middleware และในทุก API",
      "รันทั้งระบบ (เว็บ, AI, ฐานข้อมูล) ได้ในคำสั่งเดียวด้วย Docker Compose และขึ้นใช้งานจริงบน Azure",
      "แยกฐานข้อมูลและที่เก็บไฟล์ของแต่ละ environment (Docker, Vercel + Render และ Azure) ไม่ให้ข้อมูลปนกัน",
      "มีระบบผู้ดูแล สำหรับจัดการผู้ใช้ สลับโมเดล AI และดูสถิติการใช้งาน",
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "YOLO", "MongoDB", "Prisma", "Auth.js", "Docker Compose"],
    repos: [{ label: "Code", url: "https://github.com/NewSnooker/acne-detection" }],
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
    team: { kind: "team", size: 4, role: "ออกแบบและพัฒนาระบบ" },
    context: "โครงงาน ปวส. 2",
    summary:
      "ระบบจัดการโปรเจกต์ งาน ลูกค้า ใบแจ้งหนี้ และการชำระเงิน มีบอร์ดงานแบบลากวาง (Kanban) สำหรับติดตามสถานะงาน",
    highlights: [
      "แบ่งโปรเจกต์เป็นโมดูลและงาน มีบอร์ด Kanban ลากการ์ดข้ามคอลัมน์ รอทำ / กำลังทำ / เสร็จแล้ว และบันทึกสถานะลงฐานข้อมูล",
      "ออกใบแจ้งหนี้ บันทึกการชำระเงิน และสั่งพิมพ์ใบแจ้งหนี้จากหน้าเว็บได้",
      "แบ่งสิทธิ์ผู้ใช้ 4 ระดับ (ผู้ดูแล, เจ้าของงาน, ลูกค้า, สมาชิกทีม) แสดงเมนูต่างกันตามสิทธิ์",
      "เชิญผู้อื่นเข้าร่วมโปรเจกต์ แชร์หน้าโปรเจกต์แบบสาธารณะ และแสดงความคิดเห็นในโปรเจกต์ได้",
      "มีระบบจัดการไฟล์แบบโฟลเดอร์ อัปโหลดไฟล์ด้วย UploadThing",
      "ใช้ Server Actions ของ Next.js จัดการข้อมูลแยกตามฟีเจอร์ และกรอง HTML ที่ผู้ใช้กรอกด้วย DOMPurify กันสคริปต์แปลกปลอม",
      "ล็อกอินด้วย Google / GitHub, รีเซ็ตรหัสผ่าน และส่งอีเมลถึงผู้ติดตามด้วย Nodemailer",
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
    team: { kind: "team", size: 4, role: "ออกแบบและพัฒนาระบบ" },
    context: "โครงงาน ปวส. 1",
    summary: "ระบบยืม-คืนหนังสือ รายการหนังสือโปรด และหลังบ้านสำหรับผู้ดูแลจัดการหนังสือ หมวดหมู่ และแบนเนอร์",
    highlights: [
      "ออกแบบฐานข้อมูลด้วย Prisma + MongoDB แยกหนังสือ หมวดหมู่ ผู้ใช้ การยืม และเก็บจำนวนหนังสือทั้งหมดกับจำนวนคงเหลือแยกกัน",
      "ยืมหนังสือ: ตรวจจำนวนคงเหลือก่อน ลดจำนวนคงเหลือ บันทึกผู้อนุมัติและวันครบกำหนดคืน",
      "คืนหนังสือ: บันทึกสถานะ คืนแล้ว / เกินกำหนด / ทำหาย พร้อมค่าปรับและจำนวนที่ชำรุด ถ้าคืนแล้วจะเพิ่มจำนวนคงเหลือกลับ",
      "บันทึกประวัติการทำงาน (activity log) ทุกครั้งที่เพิ่มหรือแก้ไขหนังสือ หมวดหมู่ แบนเนอร์ และการยืม-คืน",
      "หน้าแดชบอร์ดสรุปจำนวนหนังสือ รายการยืมล่าสุด และกราฟการยืมรายเดือน (Recharts)",
      "สมัครสมาชิกแบบยืนยันอีเมล และลืมรหัสผ่าน ส่งอีเมลด้วย Nodemailer + React Email และเข้ารหัสรหัสผ่านด้วย bcrypt",
      "แบ่งสิทธิ์ผู้ใช้กับผู้ดูแล ผู้ใช้กดหนังสือโปรดเก็บไว้ได้ และอัปโหลดรูปปกด้วย UploadThing",
      "จัดการข้อมูลฝั่งหน้าเว็บด้วย TanStack Query, TanStack Table และ Redux Toolkit",
    ],
    stack: ["Next.js", "Prisma", "MongoDB", "NextAuth", "Redux Toolkit", "TanStack Query"],
    repos: [{ label: "Code", url: gh("library_management_system") }],
    demo: "https://library-management-system-kohl.vercel.app",
    featured: true,
  },
  {
    slug: "snooker-g",
    title: "Snooker G",
    subtitle: "ระบบสมาชิกและจัดการผู้ใช้ แยก Backend / Frontend",
    category: "web",
    year: 2568,
    status: "done",
    summary: "ระบบแยก Backend (REST API) ออกจากหน้าเว็บ เน้นระบบสมาชิก การยืนยันตัวตน และการจัดการผู้ใช้หลายระดับ ออกแบบฐานข้อมูลเผื่อต่อยอดเป็นแพลตฟอร์มเกม",
    highlights: [
      "REST API ด้วย Elysia บน Bun แบ่งเป็น controller / service ชัดเจน พร้อมเอกสาร API (Swagger)",
      "แบ่งสิทธิ์ผู้ใช้ 3 ระดับ ผู้ใช้ / ผู้ดูแล / ผู้ดูแลสูงสุด และตรวจสิทธิ์ทุก endpoint",
      "ยืนยันตัวตนด้วย JWT ผ่าน cookie และเข้าสู่ระบบด้วย Google (ตรวจ token ที่ฝั่ง server)",
      "ลบผู้ใช้แบบ soft delete กู้คืนได้ และมีงานตั้งเวลา (cron) ลบถาวรเมื่อครบ 7 วัน โดยลบข้อมูลที่เกี่ยวข้องใน transaction เดียว",
      "ผู้ดูแลสูงสุดบังคับผู้ใช้ออกจากระบบ และเข้าสู่ระบบแทนผู้ใช้ (impersonate) ได้ โดยเก็บประวัติทุกครั้ง",
      "บันทึก log ด้วย Winston แยกไฟล์รายวัน เก็บย้อนหลัง 14 วัน",
      "ฝั่งหน้าเว็บ (Next.js) เรียก API แบบมี type ด้วย Eden, ตรวจฟอร์มด้วย Zod และจัดการ state ด้วย Zustand + TanStack Query",
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
    highlights: [
      "ออกแบบหน้าแอปครบชุด: หน้าแนะนำ, เข้าสู่ระบบ / สมัคร, หน้าแรก, รายละเอียดสินค้า, คำสั่งซื้อ และโปรไฟล์",
      "แถบเมนูด้านล่างแบบเคลื่อนไหว (curved_navigation_bar) สำหรับสลับหน้า",
      "รวมสไตล์ตัวอักษรที่ใช้ซ้ำไว้ใน widget กลางที่เดียว",
    ],
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
    summary: "แอปรายชื่อติดต่อ กดโทรออกหรือติดต่อผ่าน WhatsApp ได้จากในแอป พร้อมสลับธีมสว่าง / มืด",
    highlights: [
      "กดโทรออกได้จากในแอปด้วย url_launcher",
      "เปิดแชทหรือวิดีโอคอล WhatsApp ได้ ถ้าเครื่องไม่มีแอปจะเปิดผ่านเว็บ wa.me แทน",
      "สลับธีมสว่าง / มืด และจำค่าที่เลือกไว้ในเครื่องด้วย shared_preferences",
    ],
    stack: ["Flutter", "Dart"],
    repos: [{ label: "Code", url: gh("flutter_contact_phone") }],
  },
  {
    slug: "full-stack-docker",
    title: "Full-stack Docker",
    subtitle: "แอป React + Express + MongoDB ใน Docker",
    category: "web",
    year: 2568,
    status: "done",
    summary: "ฝึกรันแอปแบบ Full-stack ทั้ง Frontend, Backend และฐานข้อมูลด้วย Docker Compose",
    highlights: [
      "แยก container ของ client, server และ MongoDB แล้วเชื่อมกันผ่าน Docker network เดียวกัน",
      "ใช้ Dockerfile แยกโหมดพัฒนา (แก้โค้ดแล้วเห็นผลทันทีผ่าน volume) กับโหมดใช้งานจริง",
      "build หน้าเว็บแบบ multi-stage แล้วเสิร์ฟด้วย Nginx",
      "เก็บข้อมูล MongoDB ไว้ใน volume ข้อมูลไม่หายเมื่อปิด container",
    ],
    stack: ["Docker", "Docker Compose", "React", "Express", "MongoDB"],
    repos: [{ label: "Code", url: gh("full-stack-docker") }],
  },
  {
    slug: "daily-weather",
    title: "Daily Weather",
    subtitle: "เว็บพยากรณ์อากาศ",
    category: "web",
    year: 2567,
    status: "done",
    summary: "เว็บดูสภาพอากาศ ดึงข้อมูลจาก OpenWeatherMap API",
    highlights: [
      "ค้นหาสภาพอากาศตามชื่อเมือง หรือกดเลือกจากเมืองแนะนำ แสดงผลเป็นภาษาไทย",
      "แยกโค้ดเรียก API ไว้ใน service พร้อม type ของข้อมูล และจัดการข้อผิดพลาดของ API",
      "แสดง skeleton ระหว่างโหลดข้อมูล",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "OpenWeatherMap API"],
    repos: [{ label: "Code", url: gh("DailyWeather") }],
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
      "เก็บสถานะผู้ใช้ด้วย React Context และกันหน้าแชทไม่ให้เข้าได้ถ้ายังไม่ล็อกอิน",
      "สร้างห้องแชทได้ และรับข้อความใหม่แบบเรียลไทม์ด้วย Supabase Realtime (postgres_changes) แยกตามห้อง",
      "อัปโหลดรูปภาพในแชทไปเก็บที่ Supabase Storage",
      "ตั้ง Row Level Security ในฐานข้อมูล ให้ทุกคนอ่านข้อความได้ แต่ต้องล็อกอินก่อนจึงจะส่งได้",
    ],
    stack: ["React", "Vite", "Supabase", "Tailwind CSS", "DaisyUI", "Vercel"],
    repos: [{ label: "Code", url: gh("supabase_auth_realtime") }],
    demo: "https://supabase-auth-realtime-chat.vercel.app",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const teamLabel = (team: NonNullable<Project["team"]>) =>
  team.kind === "solo" ? "ทำเดี่ยว" : `ทีม ${team.size} คน`;
