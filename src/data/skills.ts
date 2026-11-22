export type SkillGroup = {
  label: string;
  items: string[];
};

// Each item name must have an icon in src/components/skillIcons.tsx.

// Shown first. The full list opens with "ดูทั้งหมด".
export const coreSkills: string[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "FastAPI",
  "MySQL",
  "Git",
];

export const skillGroups: SkillGroup[] = [
  { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  {
    label: "Backend & Database",
    items: ["Node.js", "Express", "Elysia", "FastAPI", "REST API", "SQL", "MySQL", "phpMyAdmin", "MongoDB", "Prisma"],
  },
  { label: "Mobile & AI", items: ["Flutter", "Dart", "Python", "YOLO", "Google Colab", "Kaggle"] },
  {
    label: "Dev Tools",
    items: ["VS Code", "Git", "GitHub", "Docker", "Postman", "Swagger", "Vercel", "Render", "Supabase", "Azure", "Figma", "draw.io"],
  },
  { label: "ภาษาอื่น", items: ["Java", "C++"] },
  { label: "กำลังศึกษา", items: ["Spring Boot", "Angular"] },
];
