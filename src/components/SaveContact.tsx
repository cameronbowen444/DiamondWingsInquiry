"use client";

import { Download } from "lucide-react";

export default function SaveContactButton() {
  function saveContact() {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Diamond Wings 369
ORG:Diamond Wings 369
TEL;TYPE=CELL:818-626-4592
EMAIL:frank@diamondwings369.com
URL:https://diamondwings369.com
END:VCARD`;

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "diamond-wings-369.vcf";
    link.click();

    window.URL.revokeObjectURL(url);
  }

  return (
    <button
      type="button"
      onClick={saveContact}
      className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm text-white backdrop-blur-xl transition hover:border-[#d8c7a3]/50 hover:bg-white/[0.09]"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d0a356] text-[#090909] transition group-hover:scale-105">
        <Download size={15} />
      </span>
      Save Contact
    </button>
  );
}