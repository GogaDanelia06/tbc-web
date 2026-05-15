"use client";

import TemplateCard from "./TemplateCard";
import type { Template } from "./types";

type Props = {
  templates: Template[];
  sendLabel: string;
  openEditModal: (item: Template) => void;
  handleDelete: (id: number) => void;
  handleTransfer: (item: Template) => void;
  langMessage: (en: string, ka: string) => string;
};

export default function TemplateGrid({
  templates,
  sendLabel,
  openEditModal,
  handleDelete,
  handleTransfer,
  langMessage,
}: Props) {
  return (
    <>
      <div className="mt-8 grid gap-x-10 gap-y-9 sm:grid-cols-2 xl:grid-cols-3">
        {templates.map((item) => (
          <TemplateCard
            key={item.id}
            item={item}
            sendLabel={sendLabel}
            openEditModal={openEditModal}
            handleDelete={handleDelete}
            handleTransfer={handleTransfer}
          />
        ))}
      </div>

      {templates.length === 0 && (
        <p className="mt-10 text-center text-sm text-gray-400">
          {langMessage("No templates found", "შაბლონები ვერ მოიძებნა")}
        </p>
      )}
    </>
  );
}