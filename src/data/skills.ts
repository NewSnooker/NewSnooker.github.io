export type SkillGroup = {
  label: string;
  items: string[];
};

// Each item name must have an icon in src/components/skillIcons.tsx.
export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Python", "Java", "C++"] },
  { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "Elysia", "FastAPI", "REST API", "Swagger"] },
  { label: "Mobile", items: ["Flutter", "Dart"] },
  { label: "Database", items: ["SQL", "MySQL", "phpMyAdmin", "MongoDB", "Prisma"] },
  { label: "Deploy & Tools", items: ["Docker", "VS Code", "Postman", "Git", "GitHub", "Vercel", "Render", "Supabase", "Azure"] },
  { label: "Design", items: ["Figma", "draw.io"] },
  { label: "AI", items: ["YOLO", "Google Colab", "Kaggle"] },
  { label: "กำลังศึกษา", items: ["Spring Boot", "Angular"] },
];
