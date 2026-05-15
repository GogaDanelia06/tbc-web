import { useState } from "react";
import type { Template } from "./types";
import { fetchTemplates, saveTemplate, deleteTemplate } from "./templateApi";

export function useTemplateForm(userId: number) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null);

  const [name, setName] = useState("");
  const [iban, setIban] = useState("");
  const [currency, setCurrency] = useState("GEL");

  async function loadTemplates() {
    const data = await fetchTemplates(userId);
    setTemplates(data);
  }

  function openAddModal() {
    setEditingTemplate(null);
    setName("");
    setIban("");
    setCurrency("GEL");
    setModalOpen(true);
  }

  function openEditModal(item: Template) {
    setEditingTemplate(item);
    setName(item.name);
    setIban(item.iban);
    setCurrency(item.currency);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditingTemplate(null);
    setName("");
    setIban("");
    setCurrency("GEL");
  }

  async function handleSave() {
    if (!name.trim() || !iban.trim()) return;

    const method = editingTemplate ? "PATCH" : "POST";

    const body = editingTemplate
      ? { id: editingTemplate.id, name, iban, currency }
      : { userId, name, iban, currency };

    const res = await saveTemplate(body, method);

    if (!res.ok) return;

    await loadTemplates();
    closeModal();
  }

  async function handleDelete(id: number) {
    await deleteTemplate(id);
    await loadTemplates();
  }

  return {
    templates,
    modalOpen,
    editingTemplate,
    name,
    iban,
    currency,
    setName,
    setIban,
    setCurrency,
    loadTemplates,
    openAddModal,
    openEditModal,
    closeModal,
    handleSave,
    handleDelete,
  };
}