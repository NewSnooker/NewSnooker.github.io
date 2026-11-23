export type ProjectCategory = "web" | "mobile" | "game" | "design";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  // Official English name, shown under the subtitle in the popup.
  subtitleEn?: string;
  category: ProjectCategory;
  year: number;
  status: "done" | "in-progress" | "paused";
  // How the work was done. For team work, say what *you* did.
  // Leave out until confirmed. For team work, say what *you* did in `role`.
  team?: { kind: "solo" } | { kind: "team"; size: number; role?: string };
  context?: string;
  summary: string;
  // One sentence on what the author learned. Shown after the highlights in the popup.
  learned?: string;
  highlights: string[];
  stack: string[];
  repos: { label: string; url: string }[];
  demo?: string;
  // Button text for `demo`. Defaults to "Live site".
  demoLabel?: string;
  // Extra external buttons (e.g. a demo video) shown after `demo`.
  links?: { label: string; url: string }[];
  // Paths under public/, e.g. "/images/projects/acne-ai/cover.png".
  cover?: string;
  gallery?: string[];
  featured?: boolean;
};

// Shown next to the category when a project is not finished.
export const statusLabels: Partial<Record<Project["status"], string>> = {
  "in-progress": "กำลังพัฒนา",
  paused: "ไม่ได้พัฒนาต่อ",
};

export const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web",
  mobile: "Mobile",
  design: "Design",
  game: "Game",
};

const gh = (repo: string) => `https://github.com/NewSnooker/${repo}`;

export const projects: Project[] = [
  {
    slug: "acne-ai",
    featured: true,
    cover: "/images/projects/acne-ai/cover.jpg",
    gallery: ["/images/projects/acne-ai/06.jpg", "/images/projects/acne-ai/01.jpg", "/images/projects/acne-ai/02.jpg", "/images/projects/acne-ai/03.jpg", "/images/projects/acne-ai/07.jpg", "/images/projects/acne-ai/04.jpg", "/images/projects/acne-ai/11.jpg", "/images/projects/acne-ai/05.jpg", "/images/projects/acne-ai/12.jpg", "/images/projects/acne-ai/08.jpg", "/images/projects/acne-ai/09.jpg", "/images/projects/acne-ai/10.jpg"],
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
      "แยกระบบเป็นเว็บแอป (Next.js) กับ AI Service (FastAPI) ที่ทำหน้าที่ตรวจภาพอย่างเดียว และเชื่อมต่อกันผ่าน REST API",
      "เทรนโมเดล YOLO ตรวจจับสิว 6 ชนิด แล้วคำนวณระดับความรุนแรงตามเกณฑ์ในเล่มโครงงาน วัดผลได้ mAP@0.5 60.36%",
      "รันทั้งระบบ (เว็บ, AI, ฐานข้อมูล) ด้วย Docker Compose คำสั่งเดียว และเปิดให้ทดลองใช้งานบน Azure",
    ],
    learned: "ได้เรียนรู้การนำระบบขึ้นใช้งานจริงด้วย Docker และ Azure รวมถึงการแยกฐานข้อมูลและที่เก็บไฟล์ของแต่ละ environment ไม่ให้ข้อมูลปนกัน",
    stack: ["Next.js", "TypeScript", "FastAPI", "Python", "YOLO", "MongoDB", "Prisma", "Auth.js", "Docker Compose", "Azure"],
    repos: [{ label: "Code", url: "https://github.com/NewSnooker/acne-detection" }],
    demo: "https://acne-web.calmsand-e76a4fc0.japaneast.azurecontainerapps.io",
  },
  {
    slug: "project-management-system",
    featured: true,
    cover: "/images/projects/project-management-system/cover.jpg",
    gallery: ["/images/projects/project-management-system/03.jpg", "/images/projects/project-management-system/04.jpg", "/images/projects/project-management-system/05.jpg", "/images/projects/project-management-system/11.jpg", "/images/projects/project-management-system/12.jpg", "/images/projects/project-management-system/13.jpg", "/images/projects/project-management-system/06.jpg", "/images/projects/project-management-system/07.jpg", "/images/projects/project-management-system/08.jpg", "/images/projects/project-management-system/09.jpg"],
    title: "ระบบบริหารจัดการโปรเจกต์",
    subtitle: "Project Management System",
    category: "web",
    year: 2568,
    status: "done",
    team: { kind: "team", size: 4, role: "พัฒนาระบบทั้งหมด (สมาชิกอีก 3 คนทำเล่มและทดสอบระบบ)" },
    context: "โครงงาน ปวส. 2",
    summary: "ระบบภายในองค์กรสำหรับจัดการโปรเจกต์ งาน ลูกค้า ใบแจ้งหนี้ และการชำระเงิน พร้อมบอร์ดงานแบบลากวาง (Kanban)",
    highlights: [
      "บอร์ด Kanban ลากการ์ดงานข้ามสถานะ บันทึกสถานะลงฐานข้อมูล พร้อมแถบความคืบหน้าของแต่ละฟีเจอร์",
      "หน้ารายละเอียดโครงการแสดงค่าใช้จ่ายเทียบงบประมาณ การชำระเงิน และใบแจ้งหนี้ที่สั่งพิมพ์ได้ และส่งอีเมลหาลูกค้าพร้อมไฟล์แนบได้",
      "แบ่งสิทธิ์ผู้ใช้ 4 ระดับ (ผู้ดูแล, เจ้าของงาน, ลูกค้า, สมาชิกทีม) และเข้าสู่ระบบด้วยอีเมล หรือบัญชี Google / GitHub",
    ],
    learned: "ได้ฝึกออกแบบฐานข้อมูลที่ข้อมูลเชื่อมกันหลายส่วน ทำระบบสิทธิ์หลายระดับพร้อมล็อกอินด้วย Google / GitHub และทำงานร่วมกับทีมที่รับผิดชอบเล่มและการทดสอบ",
    stack: ["Next.js", "TypeScript", "Prisma", "MongoDB", "NextAuth", "Vercel"],
    repos: [{ label: "Code", url: gh("it-udvc-pms") }],
    demo: "https://it-udvc-pms.vercel.app",
  },
  {
    slug: "library-management-system",
    featured: true,
    cover: "/images/projects/library-management-system/cover.jpg",
    gallery: ["/images/projects/library-management-system/01.jpg", "/images/projects/library-management-system/02.jpg", "/images/projects/library-management-system/03.jpg", "/images/projects/library-management-system/04.jpg", "/images/projects/library-management-system/05.jpg"],
    title: "ระบบห้องสมุด",
    subtitle: "Library Management System",
    category: "web",
    year: 2567,
    status: "done",
    team: { kind: "team", size: 4, role: "ออกแบบและพัฒนาระบบทั้งหมด (สมาชิกอีก 3 คนทำเล่มและทดสอบระบบ)" },
    context: "โครงงาน ปวส. 1",
    summary: "ระบบยืม-คืนหนังสือ รายการหนังสือโปรด และหลังบ้านสำหรับผู้ดูแลจัดการหนังสือ หมวดหมู่ และแบนเนอร์",
    highlights: [
      "ระบบยืม-คืนที่ตรวจจำนวนคงเหลือก่อนยืม บันทึกผู้อนุมัติและวันครบกำหนด และตอนคืนบันทึกสถานะ คืนแล้ว / เกินกำหนด / ทำหาย พร้อมค่าปรับ",
      "บันทึกประวัติการทำงาน (activity log) ทุกครั้งที่เพิ่มหรือแก้ไขข้อมูล และแดชบอร์ดพร้อมกราฟการยืมรายเดือน",
      "สมัครสมาชิกแบบยืนยันอีเมล และลืมรหัสผ่าน ส่งอีเมลด้วย Nodemailer + React Email",
    ],
    learned: "ได้ฝึกออกแบบลำดับการทำงานของการยืม-คืนให้จำนวนหนังสือคงเหลือถูกต้องเสมอ จัดการข้อมูลฝั่งหน้าเว็บด้วย TanStack Query และ Redux Toolkit และทำระบบส่งอีเมลยืนยันตัวตนกับรีเซ็ตรหัสผ่าน",
    stack: ["Next.js", "Prisma", "MongoDB", "NextAuth", "Redux Toolkit", "TanStack Query"],
    repos: [{ label: "Code", url: gh("library_management_system") }],
    demo: "https://library-management-system-kohl.vercel.app",
  },
  {
    slug: "ecommerce-ui-design",
    featured: true,
    cover: "/images/projects/vitalbite-figma/cover.jpg",
    gallery: [
      "/images/projects/vitalbite-figma/01.jpg",
      "/images/projects/vitalbite-figma/02.jpg",
      "/images/projects/vitalbite-figma/03.jpg",
      "/images/projects/vitalbite-figma/04.jpg",
      "/images/projects/vitalbite-figma/05.jpg",
    ],
    title: "E-commerce UI Design",
    subtitle: "ออกแบบ UI แอปร้านค้าออนไลน์ด้วย Figma",
    category: "design",
    year: 2568,
    status: "done",
    team: { kind: "solo" },
    context: "งานในรายวิชา",
    summary: "งานออกแบบ UI และ Prototype บน Figma สำหรับแอปมือถือร้านขายอาหารเพื่อสุขภาพและอาหารเสริม",
    highlights: [
      "ออกแบบหน้าจอครบทั้ง flow ตั้งแต่หน้าแรก สมัครสมาชิก / เข้าสู่ระบบ หน้าสินค้า ตะกร้า ไปจนถึงชำระเงินด้วย QR",
      "สร้างชุด Component ไว้ใช้ซ้ำ เช่น Navbar ก่อนและหลังล็อกอิน การ์ดสินค้า ปุ่ม และตัวเลือกวิธีชำระเงิน",
      "เชื่อมหน้าจอเป็น Prototype ที่กดทดลองใช้งานได้ รวมถึงหน้า Skeleton และสถานะ Loading",
    ],
    learned: "ได้ฝึกคิด flow การซื้อของจากมุมผู้ใช้ให้ครบทุกขั้นตอน สร้าง Component ใน Figma ให้แก้ไขทีเดียวได้ทั้งไฟล์ และออกแบบสถานะระหว่างรอโหลดไม่ให้หน้าจอว่าง",
    stack: ["Figma", "UI Design", "Prototype", "Component"],
    repos: [],
    demo: "https://www.figma.com/proto/BnkIdCYwIi24dVMbWywbAm/E-Commerce-Project?node-id=1-4603&t=E9AFHOOSJ7SjX6FY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4603",
  },
  {
    slug: "med-reminder",
    cover: "/images/projects/med-reminder/cover.jpg",
    gallery: ["/images/projects/med-reminder/01.jpg", "/images/projects/med-reminder/02.jpg", "/images/projects/med-reminder/03.jpg"],
    title: "ระบบเตือนการทานยา",
    subtitle: "Medication Reminder",
    category: "web",
    year: 2568,
    status: "done",
    team: { kind: "team", size: 2, role: "พัฒนา Frontend และเชื่อมต่อ API" },
    summary: "เว็บเตือนการทานยาสำหรับผู้ป่วยและแพทย์ ผู้ป่วยเข้าสู่ระบบด้วย LINE เพื่อดูรายการยาประจำวันและบันทึกการทานยา",
    highlights: [
      "หน้าเข้าสู่ระบบด้วย LINE และหน้าหลักของผู้ป่วย แสดงรายการยาประจำวันตามมื้อ กรองตามสถานะการทานยา พร้อมแถบความคืบหน้า",
      "หน้าฝั่งแพทย์และผู้ดูแล สำหรับจัดการยา สั่งจ่ายยาให้ผู้ป่วย และจัดการผู้ใช้ พร้อมตรวจข้อมูลในฟอร์มก่อนส่ง",
      "ทำงานร่วมกับคนทำหลังบ้านผ่าน Git และ GitHub แยก branch ตามฟีเจอร์ รวมงานล่าสุดจาก develop และเปิด pull request",
    ],
learned: "ได้เรียนรู้การเชื่อมหน้าเว็บเข้ากับ API ที่คนอื่นเขียน การใช้ Git ทำงานเป็นทีมด้วย branch และ pull request และการแสดงเมนูให้ต่างกันตามบทบาทผู้ใช้",
    stack: ["Next.js", "TypeScript", "NextAuth", "LINE Login", "REST API", "Git", "GitHub"],
    repos: [],
  },
  {
    slug: "supabase-realtime-chat",
    cover: "/images/projects/supabase-realtime-chat/cover.jpg",
    gallery: ["/images/projects/supabase-realtime-chat/01.jpg"],
    title: "Realtime Chat",
    subtitle: "แชทแบบเรียลไทม์ด้วย Supabase",
    category: "web",
    year: 2567,
    status: "done",
    summary:
      "เว็บแชทที่ผู้ใช้สมัครสมาชิกและเข้าสู่ระบบได้ สร้างห้องแชท ส่งข้อความและรูปภาพ โดยข้อความใหม่ขึ้นทันทีโดยไม่ต้องรีเฟรช",
    highlights: [
      "เข้าสู่ระบบด้วยอีเมลและรหัสผ่าน (ยืนยันอีเมลตอนสมัคร) หรือบัญชี GitHub ผ่าน Supabase Auth",
      "สร้างห้องแชทและรับข้อความใหม่แบบเรียลไทม์ด้วย Supabase Realtime และส่งรูปภาพที่เก็บไว้ใน Supabase Storage",
      "ตั้ง Row Level Security ในฐานข้อมูล ให้ทุกคนอ่านข้อความได้ แต่ต้องล็อกอินก่อนจึงจะส่งได้",
    ],
learned: "ได้เรียนรู้การใช้ Supabase เป็นหลังบ้านสำเร็จรูป ทั้งระบบล็อกอิน ข้อมูลเรียลไทม์ และที่เก็บไฟล์ รวมถึงการกำหนดสิทธิ์ที่ระดับฐานข้อมูลด้วย Row Level Security",
    stack: ["React", "Vite", "Supabase", "Tailwind CSS", "DaisyUI", "Vercel"],
    repos: [{ label: "Code", url: gh("supabase_auth_realtime") }],
    demo: "https://supabase-auth-realtime-chat.vercel.app",
  },
  {
    slug: "e-commerce-flutter",
    cover: "/images/projects/e-commerce-flutter/cover.jpg",
    title: "E-commerce App",
    subtitle: "แอปร้านค้าออนไลน์ด้วย Flutter",
    category: "mobile",
    year: 2567,
    status: "done",
    summary: "งานออกแบบหน้าจอ (UI) แอปร้านค้าออนไลน์บนมือถือ มีเมนูด้านล่างสำหรับสลับหน้า",
    highlights: [
      "ออกแบบหน้าแอป: หน้าแนะนำ, เข้าสู่ระบบ / สมัครสมาชิก, หน้าแรกแสดงสินค้าแยกหมวด และหน้ารายละเอียดสินค้า",
      "แถบเมนูด้านล่างแบบเคลื่อนไหว (curved_navigation_bar) สำหรับสลับหน้า",
      "รวมสไตล์ตัวอักษรที่ใช้ซ้ำไว้ใน widget กลางที่เดียว",
    ],
learned: "ได้เรียนรู้พื้นฐานการสร้างแอปด้วย Flutter การแบ่งหน้าจอเป็น widget การใช้ package ภายนอก และการรวมสไตล์ที่ใช้ซ้ำไว้ที่เดียว",
    stack: ["Flutter", "Dart"],
    repos: [{ label: "Code", url: gh("e-commerce-flutter-app") }],
  },
  {
    slug: "snooker-g",
    cover: "/images/projects/snooker-g/cover.jpg",
    gallery: ["/images/projects/snooker-g/01.jpg", "/images/projects/snooker-g/02.jpg", "/images/projects/snooker-g/03.jpg"],
    title: "Snooker G",
    subtitle: "ระบบสมาชิกและจัดการผู้ใช้ แยก Backend / Frontend",
    category: "web",
    year: 2568,
    status: "paused",
    summary: "ระบบเว็บเกมออนไลน์ ทำเสร็จในส่วนระบบสมาชิกและหลังบ้านจัดการผู้ใช้ พร้อม REST API ที่เขียนด้วย Elysia",
    highlights: [
      "เขียน REST API ด้วย Elysia บน Bun แบ่งเป็น controller / service พร้อมเอกสาร API (OpenAPI) ที่เปิดดูและทดสอบเรียกได้ผ่านหน้า Scalar",
      "ลบผู้ใช้แบบ soft delete กู้คืนได้ และมีงานตั้งเวลา (cron) ลบถาวรเมื่อครบ 7 วัน โดยลบข้อมูลที่เกี่ยวข้องใน transaction เดียว",
      "แบ่งสิทธิ์ 3 ระดับ ผู้ดูแลสูงสุดบังคับผู้ใช้ออกจากระบบและเข้าสู่ระบบแทนผู้ใช้ได้ โดยบันทึกประวัติลงฐานข้อมูลทุกครั้ง",
    ],
learned: "ได้เรียนรู้การออกแบบ REST API แบบแยกชั้น การทำงานตั้งเวลา การใช้ transaction ให้ข้อมูลไม่ค้างครึ่งทาง และการบันทึก log ให้ตรวจสอบย้อนหลังได้",
    stack: ["Elysia", "Prisma", "MongoDB", "JWT", "Swagger", "Next.js", "Zustand", "TanStack Query"],
    repos: [
      { label: "Backend", url: gh("snooker_g_server") },
      { label: "Frontend", url: gh("snooker_g_fontend") },
    ],
  },
  {
    slug: "hotel-job-board-ui",
    cover: "/images/projects/hotel-job-board/cover.jpg",
    gallery: [
      "/images/projects/hotel-job-board/10.jpg",
      "/images/projects/hotel-job-board/05.jpg",
      "/images/projects/hotel-job-board/04.jpg",
      "/images/projects/hotel-job-board/06.jpg",
      "/images/projects/hotel-job-board/08.jpg",
      "/images/projects/hotel-job-board/09.jpg",
      "/images/projects/hotel-job-board/02.jpg",
      "/images/projects/hotel-job-board/03.jpg",
      "/images/projects/hotel-job-board/07.jpg",
      "/images/projects/hotel-job-board/01.jpg",
    ],
    title: "Hotel Job Board UI Design",
    subtitle: "ออกแบบ UI เว็บหางานสายโรงแรมและท่องเที่ยว",
    category: "design",
    year: 2568,
    status: "done",
    team: { kind: "solo" },
    summary: "งานออกแบบ UI บน Figma สำหรับเว็บหางานในอุตสาหกรรมโรงแรมและท่องเที่ยว ทั้งฝั่งผู้หางาน นายจ้าง (HR) และผู้ดูแลระบบ",
    highlights: [
      "ออกแบบหน้า Public ที่แยกงานตามแผนก พร้อมช่องค้นหา รายการงานล่าสุด หน้ารายละเอียดงาน และหน้าข้อมูลบริษัท",
      "ออกแบบแยกตามบทบาท ทั้งผู้หางาน นายจ้าง (HR) และแอดมิน พร้อม Dashboard กราฟ ตารางจัดการข้อมูล และฟอร์มต่างๆ",
      "ออกแบบหน้าแพ็กเกจและการชำระเงินผ่าน QR Code ของนายจ้าง และทุกหน้ามีทั้งเวอร์ชัน Desktop และ Mobile",
    ],
learned: "ได้ฝึกออกแบบระบบที่มีผู้ใช้หลายบทบาท แยกว่าแต่ละบทบาทต้องเห็นอะไร และออกแบบให้ใช้งานได้ทั้งบนคอมพิวเตอร์และมือถือ",
    stack: ["Figma", "UI Design", "Responsive", "Component"],
    repos: [],
  },
  {
    slug: "contact-phone-flutter",
    cover: "/images/projects/contact-phone-flutter/cover.jpg",
    title: "Contact Phone App",
    subtitle: "แอปรายชื่อติดต่อด้วย Flutter",
    category: "mobile",
    year: 2567,
    status: "done",
    summary: "แอปรายชื่อติดต่อ กดโทรออกหรือติดต่อผ่าน WhatsApp ได้จากในแอป พร้อมสลับธีมสว่าง / มืด",
    highlights: [
      "กดโทรออกได้จากในแอปด้วย url_launcher",
      "เปิดแชท WhatsApp กับรายชื่อนั้นได้จากในแอป",
      "สลับธีมสว่าง / มืด และจำค่าที่เลือกไว้ในเครื่องด้วย shared_preferences",
    ],
learned: "ได้เรียนรู้การเรียกใช้ความสามารถของเครื่องจาก Flutter เช่น การโทรออกและการเปิดแอปอื่น และการเก็บค่าที่ผู้ใช้ตั้งไว้ในเครื่อง",
    stack: ["Flutter", "Dart"],
    repos: [{ label: "Code", url: gh("flutter_contact_phone") }],
  },
  {
    slug: "auth0-react",
    cover: "/images/projects/auth0-react/01.jpg",
    gallery: ["/images/projects/auth0-react/02.jpg", "/images/projects/auth0-react/03.jpg"],
    title: "Auth0 Login",
    subtitle: "ทดลองระบบล็อกอินด้วย Auth0",
    category: "web",
    year: 2569,
    status: "done",
    summary: "เว็บ React สำหรับฝึกระบบยืนยันตัวตนด้วย Auth0 รองรับการเข้าสู่ระบบด้วย Google และแสดงข้อมูลโปรไฟล์ผู้ใช้",
    highlights: [
      "เชื่อมต่อ Auth0 ด้วย Auth0Provider และ useAuth0 ใช้ loginWithRedirect / logout ผ่านหน้า Universal Login ของ Auth0",
      "เข้าสู่ระบบด้วยบัญชี Google (Social Login) และแสดงข้อมูลผู้ใช้ที่ได้จาก token ซึ่งรวมบทบาท (role) ที่กำหนดไว้ฝั่ง Auth0",
      "เก็บ domain และ client ID ไว้ใน environment variables ไม่ฝังในโค้ด",
    ],
learned: "ได้เข้าใจการยืนยันตัวตนผ่านผู้ให้บริการภายนอก ที่ส่งผู้ใช้ไปล็อกอินที่หน้า Auth0 แล้วรับข้อมูลกลับมา โดยระบบไม่ต้องเก็บรหัสผ่านเอง",
    stack: ["React", "Auth0", "Tailwind CSS", "daisyUI"],
    repos: [{ label: "Code", url: gh("auth0") }],
  },
  {
    slug: "daily-weather",
    cover: "/images/projects/daily-weather/cover.jpg",
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
learned: "ได้ฝึกเรียก API ภายนอกด้วย TypeScript กำหนด type ให้ข้อมูลที่ได้รับ และจัดการสถานะระหว่างโหลดกับตอนเกิดข้อผิดพลาด",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "OpenWeatherMap API"],
    repos: [{ label: "Code", url: gh("DailyWeather") }],
  },
  {
    slug: "roblox-tum-tang",
    cover: "/images/projects/roblox-tum-tang/cover.jpg",
    gallery: ["/images/projects/roblox-tum-tang/04.jpg", "/images/projects/roblox-tum-tang/01.jpg", "/images/projects/roblox-tum-tang/03.jpg"],
    title: "Tum Tang Kung Sod!",
    subtitle: "เกมทำอาหารอีสานใน Roblox",
    category: "game",
    year: 2568,
    status: "done",
    team: { kind: "team", size: 2, role: "ออกแบบและพัฒนาเกม" },
    summary: "เกมทำตำแตงกุ้งสดแบบ Co-op ได้แรงบันดาลใจจาก Overcooked 2 ผู้เล่นช่วยกันทำออเดอร์ให้ทันเวลาและสะสมคะแนน",
    learned: "ได้ใช้ Roblox Studio สร้างฉาก ใส่โมเดลและเสียง เขียนสคริปต์ด้วย Luau และเข้าใจการแบ่งงานระหว่างฝั่งเซิร์ฟเวอร์กับไคลเอนต์ในเกม",
    highlights: [
      "ระบบออเดอร์ 3 รายการพร้อมกันพร้อมตัวจับเวลา ส่งไม่ทันไม่นับคะแนน และเสิร์ฟผิดประเภทได้คะแนนน้อยลง",
      "กระเป๋าเก็บของ 9 ช่องที่โยนวัตถุดิบให้เพื่อนได้ เพื่อบังคับให้ผู้เล่นช่วยกันในโหมด Co-op",
      "ขั้นตอนทำอาหารหลายขั้นตั้งแต่หั่นผักจนตำครก และมินิเกมลวกกุ้งที่ต้องกดให้ตรงจังหวะ ยิ่งกดยิ่งยาก",
    ],
    stack: ["Roblox Studio", "Luau"],
    repos: [],
    demo: "https://www.roblox.com/th/games/125295112041451/Tum-Tang-Kung-Sod",
    demoLabel: "เล่นเกม",
    links: [{ label: "ดูวิดีโอ", url: "https://www.youtube.com/watch?v=8q-w_c4PBKc" }],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const teamLabel = (team: NonNullable<Project["team"]>) =>
  team.kind === "solo" ? "ทำเดี่ยว" : `ทีม ${team.size} คน`;
