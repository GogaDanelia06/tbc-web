"use client";

import { X } from "lucide-react";
import type { Template } from "./types";

type Props = {
  modalOpen: boolean;
  editingTemplate: Template | null;
  name: string;
  iban: string;
  currency: string;
  setName: (value: string) => void;
  setIban: (value: string) => void;
  setCurrency: (value: string) => void;
  closeModal: () => void;
  handleSave: () => void;
  langMessage: (en: string, ka: string) => string;
};

export default function TemplateModal({
  modalOpen,
  editingTemplate,
  name,
  iban,
  currency,
  setName,
  setIban,
  setCurrency,
  closeModal,
  handleSave,
  langMessage,
}: Props) {
  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-[#0f172a]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-700 dark:text-white">
            {editingTemplate
              ? langMessage("Edit template", "შაბლონის შეცვლა")
              : langMessage("Add template", "შაბლონის დამატება")}
          </h2>

          <button
            type="button"
            onClick={closeModal}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1e293b]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={langMessage("Template name", "შაბლონის სახელი")}
            className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-[#1237d5] dark:border-[#334155] dark:bg-[#020617] dark:text-white"
          />

          <input
            value={iban}
            onChange={(e) => setIban(e.target.value)}
            placeholder={langMessage("Masked IBAN", "დამალული IBAN")}
            className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-[#1237d5] dark:border-[#334155] dark:bg-[#020617] dark:text-white"
          />

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-[#1237d5] dark:border-[#334155] dark:bg-[#020617] dark:text-white"
          >
            <option value="GEL">GEL</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>

          <button
            type="button"
            onClick={handleSave}
            className="h-12 w-full rounded-lg bg-[#1237d5] text-sm font-semibold text-white hover:bg-[#0f2fc0]"
          >
            {langMessage("Save", "შენახვა")}
          </button>
        </div>
      </div>
    </div>
  );
}