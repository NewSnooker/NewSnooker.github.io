export const profile = {
  name: "ภานุวัฒน์ มะธิโต",
  nameEn: "Panuwat Mathito",
  role: "นักศึกษาฝึกงาน Software Developer",
  location: "อุดรธานี",
  intro:
    "นักศึกษาชั้นปีที่ 4 สาขาวิชาเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏอุดรธานี สนใจด้าน Software Development และการพัฒนาแอปพลิเคชันที่ใช้ AI ชอบลงมือพัฒนาระบบตั้งแต่ออกแบบโครงสร้าง ฐานข้อมูล Frontend และ Backend ไปจนถึง deploy ให้ใช้งานได้จริง",
  internshipPeriod: "1 เมษายน – 11 มิถุนายน 2570",
  email: "68040233114@udru.ac.th",
  github: "https://github.com/NewSnooker",
  // Set to "/resume.pdf" after putting the file in public/ to show the resume button.
  resumeUrl: undefined as string | undefined,
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

export const experience = [
  {
    company: "บริษัท แกรนด์ เอทีเอส จำกัด",
    location: "จ.ปทุมธานี",
    position: "นักศึกษาฝึกงาน ฝ่ายไอทีซัพพอร์ต",
    period: "26 กุมภาพันธ์ – 3 พฤษภาคม 2567",
    about: "บริษัทพัฒนาซอฟต์แวร์บริหารสถานศึกษาอาชีวะ และระบบเครือข่ายสำหรับสถานศึกษา",
    tasks: [
      "ติดตั้งระบบปฏิบัติการ Windows ให้คอมพิวเตอร์ เพื่อส่งมอบให้สถานศึกษา",
      "ทำแลปเชื่อมต่อเครือข่าย LAN → Firewall (Zyxel USG60) → Switch → Access Point และตั้งค่าอุปกรณ์ผ่านหน้า GUI",
      "เรียนพื้นฐาน Docker และ Java Spring Boot จากทีมนักพัฒนา",
    ],
    // Put a lab photo at public/images/experience/firewall-lab.jpg and set this path.
    image: undefined as string | undefined,
  },
];
