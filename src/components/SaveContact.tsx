"use client";

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
      className="rounded-full border border-yellow-500 mx-1 px-5 py-3 text-yellow-500 hover:bg-yellow-500 hover:text-black transition whitespace-nowrap"
    >
      Save Contact
    </button>
  );
}