"use client";

import { Mail, MessageSquare } from "lucide-react";

type Props = {
  langMessage: (en: string, ka: string) => string;
};

export default function MessagesTabs({ langMessage }: Props) {
  return (
    <div className="flex border-b border-gray-100 dark:border-[#1f2937]">
      <button className="flex flex-1 items-center justify-center gap-2 border-b-2 border-[#1237d5] py-5 font-semibold text-[#1237d5]">
        <Mail className="h-5 w-5" />
        {langMessage("General", "ზოგადი")}
      </button>

      <button className="flex flex-1 items-center justify-center gap-2 py-5 font-semibold text-gray-500">
        <MessageSquare className="h-5 w-5" />
        {langMessage("Personal", "პერსონალური")}
      </button>
    </div>
  );
}