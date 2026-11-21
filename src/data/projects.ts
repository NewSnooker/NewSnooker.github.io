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
  highlights: string[];
  stack: string[];
  repos: { label: string; url: string }[];
  demo?: string;
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
  game: "Game",
  design: "Design",
};

const gh = (repo: string) => `https://github.com/NewSnooker/${repo}`;

export const projects: Project[] = [
  {
    slug: "acne-ai",
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
      "แยกระบบเป็นเว็บแอป (Next.js) กับ AI Service (FastAPI) ที่ทำหน้าที่ตรวจภาพอย่างเดียว เชื่อมต่อผ่าน REST API",
      "ใช้ Ultralytics YOLO เทรนโมเดลจากชุดข้อมูลบน Roboflow เพื่อตรวจจับสิว 6 ชนิด แล้วคำนวณระดับความรุนแรงตามเกณฑ์ที่กำหนดไว้ในเล่มโครงงาน",
      "วัดผลโมเดลที่ใช้งานในระบบได้ mAP@0.5 60.36%, Precision 69.83%, Recall 56.07% และ F1-score 62.20%",
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
    gallery: ["/images/projects/project-management-system/03.jpg", "/images/projects/project-management-system/04.jpg", "/images/projects/project-management-system/05.jpg", "/images/projects/project-management-system/11.jpg", "/images/projects/project-management-system/12.jpg", "/images/projects/project-management-system/13.jpg", "/images/projects/project-management-system/06.jpg", "/images/projects/project-management-system/07.jpg", "/images/projects/project-management-system/08.jpg", "/images/projects/project-management-system/09.jpg"],
    title: "ระบบบริหารจัดการโปรเจกต์",
    subtitle: "Project Management System",
    category: "web",
    year: 2568,
    status: "done",
    team: { kind: "team", size: 4, role: "ออกแบบและพัฒนาระบบ" },
    context: "โครงงาน ปวส. 2",
    summary:
      "ระบบภายในองค์กรสำหรับบริษัทเดียว ใช้จัดการโปรเจกต์ งาน ลูกค้า ใบแจ้งหนี้ และการชำระเงิน มีบอร์ดงานแบบลากวาง (Kanban) สำหรับติดตามสถานะงาน",
    highlights: [
      "แบ่งโครงการเป็นฟีเจอร์ แต่ละฟีเจอร์มีบอร์ด Kanban ลากการ์ดงานข้ามคอลัมน์ งานที่ต้องทำ / กำลังดำเนินการ / ทำเสร็จแล้ว พร้อมแถบความคืบหน้าเป็นเปอร์เซ็นต์ และบันทึกสถานะลงฐานข้อมูล",
      "แดชบอร์ดสรุปจำนวนโครงการ งบประมาณรวม ลูกค้า และสมาชิก พร้อมรายการโครงการและลูกค้าล่าสุด",
      "จัดการลูกค้า: เพิ่มหรือเชิญลูกค้าเข้าระบบ ค้นหา กรองตามช่วงวันที่ ส่งอีเมล และดาวน์โหลดข้อมูล",
      "จัดการโครงการ: กำหนดงบประมาณและวันเริ่ม-สิ้นสุด แสดงเวลาที่เหลือหรือเกินกำหนด สถานะเสร็จสิ้น และตั้งผลงานเป็นส่วนตัวหรือสาธารณะ",
      "หน้ารายละเอียดโครงการ: ค่าใช้จ่ายเทียบกับงบประมาณ ช่วงเวลา สมาชิก ข้อมูลลูกค้า โน้ตโครงการด้วยตัวแก้ไขข้อความ (พิมพ์ / เพื่อเลือกรูปแบบ) ความคิดเห็น และการชำระเงินกับใบแจ้งหนี้แยกเป็นแท็บ เชิญสมาชิกเข้าร่วมโครงการได้",
      "ส่งอีเมลหาลูกค้าจากในระบบ แนบไฟล์ได้",
      "การชำระเงินแยกตามโครงการ เปิดดูในใบแจ้งหนี้ และสั่งพิมพ์ใบแจ้งหนี้จากหน้าเว็บ",
      "จัดการไฟล์แบบโฟลเดอร์ แสดงพื้นที่ที่ใช้เทียบกับโควตา อัปโหลดไฟล์ด้วย UploadThing",
      "แบ่งสิทธิ์ผู้ใช้ 4 ระดับ (ผู้ดูแล, เจ้าของงาน, ลูกค้า, สมาชิกทีม) เข้าสู่ระบบด้วยอีเมลหรือบัญชี Google / GitHub",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "MongoDB", "NextAuth", "Vercel"],
    repos: [{ label: "Code", url: gh("it-udvc-pms") }],
    demo: "https://it-udvc-pms.vercel.app",
    featured: true,
  },
  {
    slug: "library-management-system",
    cover: "/images/projects/library-management-system/cover.jpg",
    gallery: ["/images/projects/library-management-system/01.jpg", "/images/projects/library-management-system/02.jpg", "/images/projects/library-management-system/03.jpg", "/images/projects/library-management-system/04.jpg", "/images/projects/library-management-system/05.jpg"],
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
      "หน้าแดชบอร์ดสรุปจำนวนหนังสือ รายการยืมล่าสุด และกราฟการยืมรายเดือน",
      "สมัครสมาชิกแบบยืนยันอีเมล และลืมรหัสผ่าน ส่งอีเมลด้วย Nodemailer + React Email",
      "แบ่งสิทธิ์ผู้ใช้กับผู้ดูแล ผู้ใช้กดหนังสือโปรดเก็บไว้ได้ และอัปโหลดรูปปกด้วย UploadThing",
      "จัดการข้อมูลฝั่งหน้าเว็บด้วย TanStack Query, TanStack Table และ Redux Toolkit",
    ],
    stack: ["Next.js", "Prisma", "MongoDB", "NextAuth", "Redux Toolkit", "TanStack Query"],
    repos: [{ label: "Code", url: gh("library_management_system") }],
    demo: "https://library-management-system-kohl.vercel.app",
    featured: true,
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
    summary:
      "เว็บระบบเตือนการทานยาสำหรับผู้ป่วยและแพทย์ ผู้ป่วยเข้าสู่ระบบด้วย LINE เพื่อดูรายการยาประจำวันและบันทึกสถานะการทานยา ทำงานร่วมกับเพื่อนที่พัฒนาฝั่งหลังบ้าน โดยรับผิดชอบฝั่งหน้าเว็บและเชื่อมต่อกับ API",
    highlights: [
      "พัฒนาหน้าเข้าสู่ระบบ (Sign In) ที่ใช้บัญชี LINE และหน้าหลักกับหน้าโปรไฟล์ของผู้ป่วย แสดงรายการยาประจำวันตามมื้อ กรองตามสถานะการทานยา พร้อมแถบความคืบหน้า",
      "เมนูด้านข้าง (sidebar) และแถบนำทางที่แสดงลิงก์ตามบทบาทของผู้ใช้ (ผู้ป่วย / แพทย์ / ผู้ดูแล)",
      "หน้าจัดการยา: รายการยาในตารางข้อมูล หน้าเพิ่มและแก้ไขยา และลบหลายรายการพร้อมกัน",
      "หน้าสั่งจ่ายยาให้ผู้ป่วยสำหรับแพทย์",
      "หน้าจัดการผู้ใช้: สร้าง แก้ไข และลบแบบ soft delete ด้วยฟอร์มและการ์ดแสดงตัวอย่างข้อมูลผู้ใช้",
      "ตรวจสอบข้อมูลในฟอร์มก่อนส่ง (form validation) และปรับหน้าตาให้สอดคล้องกันทั้งระบบ",
      "เชื่อมต่อหน้าเว็บกับ API ของทีมหลังบ้าน ด้วยฟังก์ชันเรียก API และ hook สำหรับดึงข้อมูลผู้ใช้",
      "ทำงานร่วมกันผ่าน Git และ GitHub: แยก branch ตามฟีเจอร์ ดึงงานล่าสุดจาก develop มารวม และเปิด pull request",
    ],
    stack: ["Next.js", "TypeScript", "NextAuth", "LINE Login", "REST API", "Git", "GitHub"],
    repos: [],
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
    summary: "ระบบเว็บเกมออนไลน์ ส่วนที่ทำเสร็จคือระบบสมาชิกและหลังบ้านจัดการผู้ใช้ เป็นโปรเจกต์ที่ได้เรียนรู้มาก ทั้งการเขียน REST API ด้วย Elysia, soft delete และการบังคับผู้ใช้ออกจากระบบ",
    highlights: [
      "เขียน REST API ด้วย Elysia บน Bun แบ่งเป็น controller / service พร้อมเอกสาร API (OpenAPI) ที่เปิดดูและทดสอบเรียกได้ผ่านหน้า Scalar",
      "ลบผู้ใช้แบบ soft delete กู้คืนได้ และมีงานตั้งเวลา (cron) ลบถาวรเมื่อครบ 7 วัน โดยลบข้อมูลที่เกี่ยวข้องใน transaction เดียว",
      "ผู้ดูแลสูงสุดบังคับผู้ใช้ออกจากระบบ (ทีละคนหรือหลายคนพร้อมกัน) และเข้าสู่ระบบแทนผู้ใช้ได้ โดยบันทึกประวัติลงฐานข้อมูลทุกครั้ง",
      "บันทึก log ด้วย Winston ทั้งใน controller, service และงานตั้งเวลา แสดงทาง console และเก็บ log ข้อผิดพลาดเป็นไฟล์รายวัน (บีบอัด เก็บย้อนหลัง 14 วัน)",
      "แบ่งสิทธิ์ผู้ใช้ 3 ระดับ (USER, ADMIN, SUPER_ADMIN) และตรวจสิทธิ์ทุก endpoint",
      "ยืนยันตัวตนด้วย JWT ผ่าน cookie และเข้าสู่ระบบด้วย Google",
      "หน้าจัดการผู้ใช้ด้วย Next.js: ค้นหา กรองตามบทบาท / สถานะ เรียงลำดับ เลือกหลายรายการ และสร้างหรือแก้ไขผู้ใช้",
      "ส่วนของผู้เล่น (ดูเกม วิธีเล่น เพื่อนร่วมเล่น ประวัติการเล่น) ยังเป็นโครงหน้าที่ไม่ได้ทำต่อ",
    ],
    stack: ["Elysia", "Prisma", "MongoDB", "JWT", "Swagger", "Next.js", "Zustand", "TanStack Query"],
    repos: [
      { label: "Backend", url: gh("snooker_g_server") },
      { label: "Frontend", url: gh("snooker_g_fontend") },
    ],
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
    stack: ["Flutter", "Dart"],
    repos: [{ label: "Code", url: gh("e-commerce-flutter-app") }],
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
      "เปิดแชทหรือวิดีโอคอล WhatsApp ได้ ถ้าเครื่องไม่มีแอปจะเปิดผ่านเว็บ wa.me แทน",
      "สลับธีมสว่าง / มืด และจำค่าที่เลือกไว้ในเครื่องด้วย shared_preferences",
    ],
    stack: ["Flutter", "Dart"],
    repos: [{ label: "Code", url: gh("flutter_contact_phone") }],
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
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "OpenWeatherMap API"],
    repos: [{ label: "Code", url: gh("DailyWeather") }],
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
    stack: ["React", "Auth0", "Tailwind CSS", "daisyUI"],
    repos: [{ label: "Code", url: gh("auth0") }],
  },
  {
    slug: "vitalbite-figma",
    cover: "/images/projects/vitalbite-figma/cover.jpg",
    title: "Vitalbite",
    subtitle: "ออกแบบ UI แอปร้านอาหารเพื่อสุขภาพ",
    category: "design",
    year: 2568,
    status: "done",
    summary: "งานออกแบบ UI และ Prototype บน Figma สำหรับแอปมือถือร้านขายอาหารเพื่อสุขภาพและอาหารเสริม",
    highlights: [
      "ออกแบบหน้าจอครบทั้ง flow ตั้งแต่ Home, สมัครสมาชิก/เข้าสู่ระบบ, หน้าสินค้าแยกตามหมวด, รายละเอียดสินค้า, ตะกร้า ไปจนถึงชำระเงินด้วย QR และหน้าชำระเงินสำเร็จ",
      "สร้างชุด Component ไว้ใช้ซ้ำ เช่น Navbar (ก่อน/หลังล็อกอิน), การ์ดสินค้า, ปุ่ม, ช่องรหัสผ่าน, ตัวเลือกวิธีชำระเงิน และแบนเนอร์เลื่อน",
      "ออกแบบ Skeleton และสถานะ Loading ของหน้าสินค้า ตะกร้า และการชำระเงิน",
      "เชื่อมหน้าจอเป็น Prototype ที่กดทดลองใช้งานได้ตามลำดับขั้นตอนของผู้ใช้",
    ],
    stack: ["Figma", "UI Design", "Prototype", "Component"],
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
      "เข้าสู่ระบบด้วยอีเมล/รหัสผ่าน (ยืนยันอีเมลตอนสมัคร) หรือบัญชี GitHub ผ่าน Supabase Auth",
      "สร้างห้องแชทได้ และรับข้อความใหม่แบบเรียลไทม์ด้วย Supabase Realtime",
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
