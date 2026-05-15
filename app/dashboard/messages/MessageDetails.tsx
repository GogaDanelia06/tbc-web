"use client";

import { Trash2 } from "lucide-react";
import type { MessageItem } from "./messagesData";

type Props = {
  selected: MessageItem;
};

export default function MessageDetails({ selected }: Props) {
  return (
    <article className="rounded-2xl bg-white p-8 shadow-sm dark:bg-[#0f172a]">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm text-gray-500">{selected.date}</p>

          <h2 className="mt-2 text-xl font-bold text-gray-800 dark:text-white">
            {selected.title}
          </h2>
        </div>

        <button className="text-[#1237d5] hover:text-red-500">
          <Trash2 className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-6 dark:border-[#1f2937]">
        <p className="max-w-3xl text-base leading-8 text-gray-700 dark:text-gray-300">
          {selected.body}
        </p>
      </div>
    </article>
  );
}