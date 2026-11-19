# Portfolio — ภานุวัฒน์ มะธิโต

เว็บพอร์ตโฟลิโอ สร้างด้วย Next.js + TypeScript + Tailwind CSS ขึ้นเว็บที่ https://newsnooker.github.io ผ่าน GitHub Pages

## รันในเครื่อง

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## แก้ข้อมูล

| ไฟล์ | เนื้อหา |
|---|---|
| `src/data/profile.ts` | ชื่อ แนะนำตัว การศึกษา ประสบการณ์ฝึกงาน ช่องทางติดต่อ |
| `src/data/skills.ts` | ทักษะแต่ละหมวด |
| `src/data/projects.ts` | ผลงานทั้งหมด |

### เพิ่มโปรเจกต์ใหม่

เพิ่มก้อนข้อมูลใหม่ใน `projects` ที่ `src/data/projects.ts` กดการ์ดแล้วจะเปิดรายละเอียดเป็นป๊อปอัป

### ใส่ภาพ

1. วางไฟล์ที่ `public/images/projects/<slug>/` เช่น `public/images/projects/acne-ai/cover.png`
2. ใส่ path ในโปรเจกต์นั้น:
   ```ts
   cover: "/images/projects/acne-ai/cover.png",
   gallery: ["/images/projects/acne-ai/01.png"],
   ```

ขนาดแนะนำ: แนวนอน 16:9 กว้างประมาณ 1600px ไม่เกิน 500KB ต่อภาพ

## Deploy

push เข้า `main` แล้ว GitHub Actions (`.github/workflows/deploy.yml`) จะ build และขึ้นเว็บให้เอง
ตั้งค่าครั้งแรก: Settings → Pages → Source เลือก **GitHub Actions**
