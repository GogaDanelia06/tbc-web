"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { messages } from "./messagesData";
import MessagesTabs from "./MessagesTabs";
import MessagesSearch from "./MessagesSearch";
import MessagesList from "./MessagesList";
import MessageDetails from "./MessageDetails";

export default function MessagesPage() {
  const { t } = useLanguage();

  const [selected, setSelected] = useState(messages[0]);
  const [search, setSearch] = useState("");

  function langMessage(en: string, ka: string) {
    return t.nav.home === "Home" ? en : ka;
  }

  const filteredMessages = useMemo(() => {
    return messages.filter((msg) =>
      `${msg.title} ${msg.desc} ${msg.body}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-[#f3f5f7] dark:bg-[#020617]">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-600 dark:text-white">
          {langMessage("Messages", "შეტყობინებები")}
        </h1>

        <div className="mt-8 grid gap-5 lg:grid-cols-[420px_1fr]">
          <aside className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-[#0f172a]">
            <MessagesTabs langMessage={langMessage} />

            <MessagesSearch
              search={search}
              setSearch={setSearch}
              langMessage={langMessage}
            />

            <MessagesList
              messages={filteredMessages}
              selected={selected}
              setSelected={setSelected}
            />
          </aside>

          <MessageDetails selected={selected} />
        </div>
      </section>
    </main>
  );
}