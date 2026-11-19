"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageCarouselProps = {
  images: string[];
  alt: string;
};

// Horizontal scroll-snap strip: swipe on touch, arrows / dots / keyboard on desktop.
export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // Keep the dot / counter in sync with manual swiping.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => setIndex(Math.round(track.scrollLeft / track.clientWidth));
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = (next + images.length) % images.length;
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  };

  // Mouse drag (touch already scrolls natively): follow the pointer, then settle on a slide.
  const drag = useRef<{ x: number; left: number } | null>(null);
  const [dragging, setDragging] = useState(false);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || images.length < 2 || event.pointerType !== "mouse" || event.button !== 0) return;
    drag.current = { x: event.clientX, left: track.scrollLeft };
    track.setPointerCapture(event.pointerId);
    setDragging(true);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !drag.current) return;
    track.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !drag.current) return;
    const dx = event.clientX - drag.current.x;
    const start = Math.round(drag.current.left / track.clientWidth);
    drag.current = null;
    setDragging(false);
    const moved = Math.abs(dx) > track.clientWidth * 0.12 ? (dx < 0 ? 1 : -1) : 0;
    const target = Math.min(images.length - 1, Math.max(0, start + moved));
    track.scrollTo({ left: target * track.clientWidth, behavior: "smooth" });
  };

  const many = images.length > 1;

  return (
    <div
      className="group/carousel relative"
      onKeyDown={(event) => {
        if (!many) return;
        if (event.key === "ArrowRight") goTo(index + 1);
        if (event.key === "ArrowLeft") goTo(index - 1);
      }}
    >
      <div
        ref={trackRef}
        tabIndex={many ? 0 : -1}
        aria-roledescription="carousel"
        aria-label={`ภาพหน้าจอ ${alt}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={`flex select-none overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          dragging ? "cursor-grabbing" : "snap-x snap-mandatory sm:cursor-grab"
        }`}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="w-full shrink-0 snap-center"
            aria-roledescription="slide"
            aria-label={`${i + 1} จาก ${images.length}`}
          >
            <Image
              src={src}
              alt={`${alt} ภาพที่ ${i + 1}`}
              width={1600}
              height={900}
              priority={i === 0}
              draggable={false}
              className="aspect-[16/9] w-full bg-surface-2 object-contain"
            />
          </div>
        ))}
      </div>

      {many ? (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="ภาพก่อนหน้า"
            className="absolute left-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/85 text-foreground opacity-100 transition-opacity sm:opacity-0 sm:group-hover/carousel:opacity-100 sm:focus-visible:opacity-100"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="ภาพถัดไป"
            className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/85 text-foreground opacity-100 transition-opacity sm:opacity-0 sm:group-hover/carousel:opacity-100 sm:focus-visible:opacity-100"
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`ไปภาพที่ ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
          <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2 py-0.5 text-[13px] tabular-nums text-white">
            {index + 1} / {images.length}
          </span>
        </>
      ) : null}
    </div>
  );
}
