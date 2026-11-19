"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type Photo = { src: string; caption: string };

// Thumbnail grid; a click opens the photo in a popup with previous / next.
export function PhotoAlbum({ photos, title }: { photos: Photo[]; title: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const drag = useRef<{ x: number; width: number } | null>(null);
  const [dragX, setDragX] = useState(0);

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

  // Drag (mouse) or swipe (touch) sideways on the photo to change it.
  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (photos.length < 2 || (event.pointerType === "mouse" && event.button !== 0)) return;
    if ((event.target as HTMLElement).closest("button")) return;
    drag.current = { x: event.clientX, width: event.currentTarget.clientWidth };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (drag.current) setDragX(event.clientX - drag.current.x);
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const dx = event.clientX - drag.current.x;
    const limit = drag.current.width * 0.12;
    drag.current = null;
    setDragX(0);
    if (Math.abs(dx) > limit) step(dx < 0 ? 1 : -1);
  };

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
        className="m-auto w-[min(960px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-border bg-popup p-0 text-foreground"
      >
        {current ? (
          <figure>
            <div className="flex items-center justify-between gap-4 px-5 py-3">
              <figcaption className="text-[16px] font-medium leading-snug">{current.caption}</figcaption>
              <button
                type="button"
                onClick={() => setIndex(null)}
                aria-label="ปิด"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-border transition-colors hover:border-faint hover:bg-surface-2"
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>
            <div
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              className="group/carousel relative touch-pan-y select-none overflow-hidden bg-surface-2 sm:cursor-grab sm:active:cursor-grabbing"
            >
              <Image
                src={current.src}
                alt={current.caption}
                width={1600}
                height={1067}
                draggable={false}
                style={{ transform: `translateX(${dragX}px)`, transition: dragX === 0 ? "transform 0.2s" : "none" }}
                className="max-h-[70vh] w-full object-contain"
              />
              {photos.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="ภาพก่อนหน้า"
                    className="absolute left-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/85 text-foreground opacity-100 transition-opacity sm:opacity-0 sm:group-hover/carousel:opacity-100 sm:focus-visible:opacity-100"
                  >
                    <ChevronLeft className="size-4" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="ภาพถัดไป"
                    className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/85 text-foreground opacity-100 transition-opacity sm:opacity-0 sm:group-hover/carousel:opacity-100 sm:focus-visible:opacity-100"
                  >
                    <ChevronRight className="size-4" aria-hidden />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1.5">
                    {photos.map((photo, i) => (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`ไปภาพที่ ${i + 1}`}
                        aria-current={i === index ? "true" : undefined}
                        className={`h-1.5 rounded-full transition-all ${
                          i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2 py-0.5 text-[13px] tabular-nums text-white">
                    {(index ?? 0) + 1} / {photos.length}
                  </span>
                </>
              ) : null}
            </div>
          </figure>
        ) : null}
      </dialog>
    </>
  );
}
