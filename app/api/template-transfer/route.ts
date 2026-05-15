import { NextResponse } from "next/server";
import {
  mockAccounts,
  mockTemplates,
  mockTransactions,
} from "@/lib/mockData";

function getCurrencySymbol(currency: string) {
  if (currency === "GEL") return "₾";
  if (currency === "USD") return "$";
  if (currency === "EUR") return "€";
  return currency;
}

export async function POST(req: Request) {
  try {
    const { userId, fromAccountId, templateId, amount } = await req.json();

    if (!userId || !fromAccountId || !templateId || !amount || amount <= 0) {
      return NextResponse.json(
        { error: "Missing or invalid fields" },
        { status: 400 }
      );
    }

    const account = mockAccounts.find(
      (acc) =>
        acc.id === Number(fromAccountId) &&
        acc.user_id === Number(userId)
    );

    if (!account) {
      return NextResponse.json(
        { error: "Account not found" },
        { status: 404 }
      );
    }

    const balanceCents = Math.round(Number(account.balance) * 100);
    const amountCents = Math.round(Number(amount) * 100);

    if (balanceCents < amountCents) {
      return NextResponse.json(
        { error: "Not enough balance" },
        { status: 400 }
      );
    }

    const template = mockTemplates.find(
      (t) =>
        t.id === Number(templateId) &&
        t.user_id === Number(userId)
    );

    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }

    account.balance = Number((Number(account.balance) - Number(amount)).toFixed(2));

    const symbol = getCurrencySymbol(account.currency);

    mockTransactions.unshift({
      id: mockTransactions.length + 1,
      user_id: Number(userId),
      date: new Date().toISOString(),
      category: "Transfer",
      details: `Transfer to ${template.name}`,
      account: account.name,
      amount: `-${Number(amount).toFixed(2)}${symbol}`,
      status: "Completed",
      color: "green",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Template transfer error:", error);

    return NextResponse.json(
      { error: "Transfer failed" },
      { status: 500 }
    );
  }
}