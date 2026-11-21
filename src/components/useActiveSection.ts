"use client";

import { useEffect, useState } from "react";

// Returns the id of the section currently under the sticky header.
// A section counts as active once its top passes ~35% down the viewport.
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const sectionIds = key.split(",");
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // At the very bottom the last section may never reach the line.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = sectionIds[sectionIds.length - 1];
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [key]);

  return active;
}
