export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express", "Elysia", "FastAPI", "REST API"],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    id: "database",
    label: "Database",
    items: ["SQL", "MySQL", "MongoDB", "Prisma ORM"],
  },
  {
    id: "tools",
    label: "Deploy / Tools",
    items: ["Docker", "Git", "GitHub", "Vercel", "Render", "Supabase", "Azure"],
  },
  {
    id: "design",
    label: "Design",
    items: ["Figma"],
  },
  {
    id: "ai",
    label: "AI",
    items: ["YOLO Object Detection", "Google Colab", "Kaggle"],
  },
  {
    id: "learning",
    label: "กำลังศึกษา",
    items: ["Java", "Spring Boot", "Angular"],
  },
];
