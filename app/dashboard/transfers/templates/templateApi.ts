import type { Template } from "./types";

export type Account = {
  id: number;
  name: string;
  balance: number;
  currency: string;
};

export async function fetchTemplates(userId: number) {
  const res = await fetch(`/api/transfer-templates?userId=${userId}`);
  const data = await res.json();

  return (data.templates || []) as Template[];
}

export async function fetchAccounts(userId: number) {
  const res = await fetch(`/api/template-transfer/accounts?userId=${userId}`);
  const data = await res.json();

  return (data.accounts || []) as Account[];
}

export async function saveTemplate(body: object, method: "POST" | "PATCH") {
  return fetch("/api/transfer-templates", {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export async function deleteTemplate(id: number) {
  return fetch("/api/transfer-templates", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
}

export async function sendTemplateTransfer(body: object) {
  return fetch("/api/template-transfer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}