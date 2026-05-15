"use client";

import { Edit3, Trash2, UserRound } from "lucide-react";
import type { Template } from "./types";

type Props = {
  item: Template;
  sendLabel: string;
  openEditModal: (item: Template) => void;
  handleDelete: (id: number) => void;
  handleTransfer: (item: Template) => void;
};

export default function TemplateCard({
  item,
  sendLabel,
  openEditModal,
  handleDelete,
  handleTransfer,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf7ff] text-[#0ea5e9]">
        <UserRound className="h-7 w-7" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          {item.verified && (
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">
              ✓
            </span>
          )}

          <p className="truncate font-semibold text-gray-700 dark:text-white">
            {item.name}
          </p>
        </div>

        <p className="mt-1 truncate text-sm text-gray-400">
          {item.iban} {item.currency}
        </p>

        <div className="mt-3 flex items-center gap-4">
          <button
            type="button"
            onClick={() => handleTransfer(item)}
            className="rounded-md border border-[#1237d5] px-5 py-2 text-sm font-semibold text-[#1237d5] hover:bg-blue-50 dark:hover:bg-[#1e293b]"
          >
            {sendLabel}
          </button>

          <button
            type="button"
            onClick={() => openEditModal(item)}
            className="text-[#1237d5] hover:opacity-70"
          >
            <Edit3 className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => handleDelete(item.id)}
            className="text-[#1237d5] hover:text-red-500"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}