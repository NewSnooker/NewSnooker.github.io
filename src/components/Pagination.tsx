import { ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";

type PaginationProps = {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
};

const iconButton =
  "grid size-9 place-items-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:border-faint";

// Arrow buttons are hidden (but keep their space) when there is nowhere to go.
export function Pagination({ page, pageCount, onChange }: PaginationProps) {
  if (pageCount <= 1) return null;

  const isFirst = page === 1;
  const isLast = page === pageCount;
  const hidden = (when: boolean) => (when ? "invisible" : "");

  return (
    <nav aria-label="เปลี่ยนหน้าผลงาน" className="mt-12 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        aria-label="หน้าก่อนหน้า"
        aria-hidden={isFirst}
        tabIndex={isFirst ? -1 : undefined}
        className={`${iconButton} ${hidden(isFirst)}`}
      >
        <ChevronLeft className="size-4" aria-hidden />
      </button>

      {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`หน้า ${n}`}
          aria-current={n === page ? "page" : undefined}
          className={`size-9 rounded-lg text-[12px] tabular-nums transition-colors ${
            n === page ? "bg-accent text-accent-ink" : "text-muted hover:bg-surface-2 hover:text-foreground"
          }`}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        aria-label="หน้าถัดไป"
        aria-hidden={isLast}
        tabIndex={isLast ? -1 : undefined}
        className={`${iconButton} ${hidden(isLast)}`}
      >
        <ChevronRight className="size-4" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => onChange(pageCount)}
        aria-label="ไปหน้าสุดท้าย"
        aria-hidden={isLast}
        tabIndex={isLast ? -1 : undefined}
        className={`${iconButton} ${hidden(isLast)}`}
      >
        <ChevronsRight className="size-4" aria-hidden />
      </button>
    </nav>
  );
}
