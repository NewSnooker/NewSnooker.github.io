export type SkillGroup = {
  label: string;
  items: string[];
};

// Each item name must have an icon in src/components/skillIcons.tsx.
export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Dart", "SQL", "Python", "Java", "C++"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "Elysia", "FastAPI", "REST API"] },
  { label: "Mobile", items: ["Flutter"] },
  { label: "Database", items: ["MySQL", "phpMyAdmin", "MongoDB", "Prisma"] },
  { label: "Dev Tools", items: ["VS Code", "Git", "GitHub", "Docker", "Postman", "Swagger", "Vercel", "Render", "Supabase", "Azure"] },
  { label: "Design", items: ["Figma", "draw.io"] },
  { label: "AI", items: ["YOLO", "Google Colab", "Kaggle"] },
  { label: "กำลังศึกษา", items: ["Spring Boot", "Angular"] },
];
