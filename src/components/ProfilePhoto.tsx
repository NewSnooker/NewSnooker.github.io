"use client";

import { useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";

// Small avatar in the intro; clicking it opens the photo full size in a popup.
export function ProfilePhoto({ src, alt }: { src: string; alt: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label="ดูรูปโปรไฟล์"
        className="group overflow-hidden rounded-2xl border border-border transition-colors hover:border-faint"
      >
        <Image
          src={src}
          alt={alt}
          width={72}
          height={72}
          priority
          className="size-[72px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </button>

      <dialog
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        aria-label="รูปโปรไฟล์"
        className="m-auto w-[min(420px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-border bg-background p-0"
      >
        <div className="relative">
          <Image src={src} alt={alt} width={840} height={840} className="w-full object-cover" />
          <button
            type="button"
            onClick={close}
            aria-label="ปิด"
            className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-border bg-background/90 text-foreground"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>
      </dialog>
    </>
  );
}
