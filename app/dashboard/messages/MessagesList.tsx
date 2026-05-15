"use client";

import { CalendarDays } from "lucide-react";
import type { MessageItem } from "./messagesData";

type Props = {
  messages: MessageItem[];
  selected: MessageItem;
  setSelected: (message: MessageItem) => void;
};

export default function MessagesList({
  messages,
  selected,
  setSelected,
}: Props) {
  return (
    <div className="max-h-[520px] overflow-y-auto px-4 pb-4">
      {messages.map((msg) => (
        <button
          key={msg.id}
          onClick={() => setSelected(msg)}
          className={`mb-3 flex w-full gap-4 rounded-xl p-4 text-left transition ${
            selected.id === msg.id
              ? "bg-gray-100 dark:bg-[#1e293b]"
              : "hover:bg-gray-50 dark:hover:bg-[#111827]"
          }`}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#1237d5] dark:bg-[#020617]">
            <CalendarDays className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <p className="text-xs text-gray-500">{msg.date}</p>

            <p className="truncate font-semibold text-gray-700 dark:text-white">
              {msg.title}
            </p>

            <p className="mt-1 truncate text-sm text-gray-400">{msg.desc}</p>
          </div>
        </button>
      ))}
    </div>
  );
}