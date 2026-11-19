"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { SiGmail } from "react-icons/si";

// mailto: does nothing when the visitor has no mail app set up, so the email
// card copies the address instead and says so.
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Older browsers / insecure context: fall back to a hidden textarea.
      const field = document.createElement("textarea");
      field.value = email;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group flex w-full items-center gap-3 rounded-lg border border-border bg-surface-2 px-4 py-3 text-left transition-colors hover:border-faint"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-surface">
        <SiGmail className="size-4" style={{ color: "#EA4335" }} aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[11px] text-muted">อีเมล · กดเพื่อคัดลอก</span>
        <span className="block truncate text-[13px]">{email}</span>
      </span>
      <span aria-live="polite" className="flex shrink-0 items-center gap-1 text-[11px] text-muted">
        {copied ? (
          <>
            <Check className="size-3.5 text-[#3FCF8E]" aria-hidden />
            คัดลอกแล้ว
          </>
        ) : (
          <Copy className="size-3.5" aria-hidden />
        )}
      </span>
    </button>
  );
}
