import { NextResponse } from "next/server";
import { mockTemplates } from "@/lib/mockData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  const templates = mockTemplates
    .filter((t) => t.user_id === Number(userId))
    .sort((a, b) => b.id - a.id);

  return NextResponse.json({ templates });
}

export async function POST(req: Request) {
  const { userId, name, iban, currency } = await req.json();

  if (!userId || !name || !iban || !currency) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const newTemplate = {
    id: mockTemplates.length + 1,
    user_id: Number(userId),
    name,
    iban,
    currency,
    verified: false,
  };

  mockTemplates.push(newTemplate);

  return NextResponse.json({ template: newTemplate });
}

export async function PATCH(req: Request) {
  const { id, name, iban, currency } = await req.json();

  if (!id || !name || !iban || !currency) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const template = mockTemplates.find((t) => t.id === Number(id));

  if (!template) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  template.name = name;
  template.iban = iban;
  template.currency = currency;

  return NextResponse.json({ template });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const index = mockTemplates.findIndex((t) => t.id === Number(id));

  if (index === -1) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  mockTemplates.splice(index, 1);

  return NextResponse.json({ success: true });
}