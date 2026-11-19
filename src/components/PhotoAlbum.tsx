"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type Photo = { src: string; caption: string };

// Thumbnail grid; a click opens the photo in a popup with previous / next.
export function PhotoAlbum({ photos, title }: { photos: Photo[]; title: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  if (photos.length === 0) return null;

  const step = (delta: number) =>
    setIndex((current) => (current === null ? null : (current + delta + photos.length) % photos.length));

  const current = index === null ? null : photos[index];

  return (
    <>
      <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`ดูภาพ: ${photo.caption}`}
              className="block w-full overflow-hidden rounded-lg border border-border transition-opacity hover:opacity-85"
            >
              <Image src={photo.src} alt={photo.caption} width={480} height={320} className="aspect-[3/2] w-full object-cover" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setIndex(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        aria-label={title}
        className="m-auto w-[min(960px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-border bg-background p-0 text-foreground"
      >
        {current ? (
          <figure>
            <div className="relative bg-black">
              <Image
                src={current.src}
                alt={current.caption}
                width={1600}
                height={1067}
                className="max-h-[75vh] w-full object-contain"
              />
              <button
                type="button"
                onClick={() => setIndex(null)}
                aria-label="ปิด"
                className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-border bg-background/90"
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>
            <figcaption className="flex items-center justify-between gap-4 px-5 py-3 text-[12px] text-muted">
              <span>{current.caption}</span>
              {photos.length > 1 ? (
                <span className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="ภาพก่อนหน้า"
                    className="grid size-8 place-items-center rounded-full border border-border hover:border-faint"
                  >
                    <ChevronLeft className="size-4" aria-hidden />
                  </button>
                  <span className="tabular-nums">
                    {(index ?? 0) + 1} / {photos.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="ภาพถัดไป"
                    className="grid size-8 place-items-center rounded-full border border-border hover:border-faint"
                  >
                    <ChevronRight className="size-4" aria-hidden />
                  </button>
                </span>
              ) : null}
            </figcaption>
          </figure>
        ) : null}
      </dialog>
    </>
  );
}
