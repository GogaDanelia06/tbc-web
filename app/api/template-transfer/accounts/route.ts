import { NextResponse } from "next/server";
import { mockAccounts } from "@/lib/mockData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  const accounts = mockAccounts
    .filter((acc) => acc.user_id === Number(userId))
    .sort((a, b) => a.id - b.id)
    .map((acc) => ({
      id: acc.id,
      name: acc.name,
      balance: acc.balance,
      currency: acc.currency,
    }));

  return NextResponse.json({ accounts });
}