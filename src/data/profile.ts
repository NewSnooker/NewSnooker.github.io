import type { Photo } from "@/components/PhotoAlbum";

export const profile = {
  name: "ภานุวัฒน์ มะธิโต",
  nameEn: "Phanuwat Mathito",
  role: "นักศึกษาฝึกงาน Software Developer",
  location: "อุดรธานี",
  intro:
    "นักศึกษาชั้นปีที่ 4 สาขาวิชาเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏอุดรธานี สนใจด้าน Software Development พัฒนาระบบตั้งแต่ออกแบบโครงสร้าง ฐานข้อมูล Frontend และ Backend รวมถึงนำขึ้นใช้งาน บำรุงรักษา และพร้อมเรียนรู้สิ่งใหม่ๆ",
  internshipPeriod: "1 เมษายน – 11 มิถุนายน 2570",
  email: "nu0075533@gmail.com",
  phone: "065-576-7707",
  github: "https://github.com/NewSnooker",
  // Your own LINE link, e.g. "https://line.me/ti/p/xxxxxxxx". The LINE button shows once this is set.
  line: "https://line.me/ti/p/jB78Xf2IQt" as string | undefined,
  // PDF under public/. Remove (set to undefined) to hide the download buttons.
  resumeUrl: "/resume/Resume_Phanuwat_Mathito.pdf" as string | undefined,
  photo: "/images/profile.jpg",
};

export const education = [
  {
    school: "มหาวิทยาลัยราชภัฏอุดรธานี",
    degree: "วิทยาศาสตรบัณฑิต (ปริญญาตรี)",
    details: [
      "คณะวิทยาศาสตร์ สาขาวิชาเทคโนโลยีสารสนเทศ",
      "กลุ่มวิชาการจัดการเทคโนโลยีสารสนเทศ",
      "หลักสูตรเทียบโอนจาก ปวส.",
    ],
    period: "2568 – ปัจจุบัน",
    note: "ชั้นปีที่ 4",
  },
  {
    school: "วิทยาลัยอาชีวศึกษาอุดรธานี",
    degree: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
    details: [
      "ประเภทวิชาเทคโนโลยีสารสนเทศและการสื่อสาร",
      "สาขาวิชาเทคโนโลยีสารสนเทศ",
      "สาขางานซอฟต์แวร์และการประยุกต์",
    ],
    period: "2566 – 2568",
  },
];

export const experience: {
  company: string;
  location: string;
  position: string;
  period: string;
  about: string;
  tasks: string[];
  photos: Photo[];
}[] = [
  {
    company: "บริษัท แกรนด์ เอทีเอส จำกัด",
    location: "จ.ปทุมธานี",
    position: "นักศึกษาฝึกงาน ฝ่ายไอทีซัพพอร์ต",
    period: "26 กุมภาพันธ์ – 3 พฤษภาคม 2567",
    about: "บริษัทพัฒนาซอฟต์แวร์บริหารสถานศึกษาอาชีวะ และระบบเครือข่ายสำหรับสถานศึกษา",
    tasks: [
      "ติดตั้งระบบปฏิบัติการ Windows ให้คอมพิวเตอร์ และแพ็คเครื่องเตรียมส่งมอบให้สถานศึกษา",
      "ทำแลปเชื่อมต่อเครือข่าย LAN → Firewall (Zyxel USG60) → Switch → Access Point และตั้งค่าอุปกรณ์ผ่านหน้า GUI",
      "ลงพื้นที่ดูหน้างานที่สถานศึกษาร่วมกับผู้ดูแลการฝึกงาน และเรียนรู้โครงสร้างระบบเครือข่ายของบริษัท",
      "เข้าร่วมอบรมพนักงานเรื่อง พ.ร.บ.คอมพิวเตอร์และแนวปฏิบัติในการทำงาน",
      "ใช้เวลาว่างจากงานในแผนกซัพพอร์ตและฝ่ายขาย ไปประจำห้องนักพัฒนาเพื่อฝึกเขียนโปรแกรมด้วยตนเอง พร้อมเรียนรู้พื้นฐาน Docker และ Java Spring Boot จากทีมนักพัฒนา",
    ],
    // Album: put photos in public/images/experience/grand-ats/ and list them here.
    photos: [
      { src: "/images/experience/grand-ats/lab-desk.jpg", caption: "ทำแลป IoT ตามใบงานของบริษัท ตั้งค่า Switch ผ่านหน้าเว็บไซต์ และค้นคว้าเพิ่มเมื่อเอกสารสอนไม่ตรงกับโจทย์" },
      { src: "/images/experience/grand-ats/firewall-switch.jpg", caption: "เชื่อมต่อ Firewall Zyxel USG60 เข้ากับ Switch" },
      { src: "/images/experience/grand-ats/access-points.jpg", caption: "เชื่อมต่อ Access Point 4 ตัวกับ Firewall ผ่าน Switch" },
      { src: "/images/experience/grand-ats/lab-notes.jpg", caption: "บันทึกขั้นตอนที่ทำในแลปและผังการทำงานของระบบ" },
      { src: "/images/experience/grand-ats/nebula-dashboard.jpg", caption: "ดูสถานะ Access Point และอุปกรณ์ที่เชื่อมต่อผ่าน Zyxel Nebula (ระบบบริหารจัดการบนคลาวด์)" },
      { src: "/images/experience/grand-ats/server-room.jpg", caption: "รับฟังคำอธิบายจากผู้ดูแลการฝึกงานเกี่ยวกับโครงสร้างระบบเครือข่ายและเส้นทางการรับส่งข้อมูลอินเทอร์เน็ตของบริษัทโดยสังเขป" },
      { src: "/images/experience/grand-ats/acronis-backup.jpg", caption: "ติดตั้ง Windows ให้คอมพิวเตอร์ที่จะส่งมอบให้สถานศึกษา ด้วยการติดตั้งจากไฟล์ต้นแบบ (image)" },
      { src: "/images/experience/grand-ats/packing.jpg", caption: "แพ็คคอมพิวเตอร์และจอที่ติดตั้งเสร็จ เตรียมส่งมอบ" },
      { src: "/images/experience/grand-ats/truck.jpg", caption: "ขนส่งอุปกรณ์ไปยังสถานศึกษา" },
      { src: "/images/experience/grand-ats/training.jpg", caption: "เข้าร่วมอบรมพนักงานเรื่องกฎหมายในที่ทำงาน (พ.ร.บ.คอมพิวเตอร์)" },
      { src: "/images/experience/grand-ats/site-classroom.jpg", caption: "ติดตามผู้ดูแลการฝึกงานลงพื้นที่สถานศึกษา เพื่อดูห้องปฏิบัติการและรับฟังการหารือเรื่องงานบำรุงรักษาตามสัญญา" },
      { src: "/images/experience/grand-ats/site-workshop.jpg", caption: "ลงพื้นที่ห้องปฏิบัติการช่างยนต์ของสถานศึกษาเดียวกัน ซึ่งเป็นอีกหนึ่งโครงการที่บริษัทรับผิดชอบ" },
    ],
  },
];
