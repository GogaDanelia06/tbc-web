import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(req: Request) {
  const { userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  const users = await sql`
    SELECT id, username, full_name
    FROM users
    WHERE id = ${userId}
  `;

  const accounts = await sql`
    SELECT id, name, balance, currency
    FROM accounts
    WHERE user_id = ${userId}
  `;

  const transactions = await sql`
    SELECT id, title, amount, date
    FROM transactions
    WHERE user_id = ${userId}
    ORDER BY id DESC
  `;

  return NextResponse.json({
    user: users[0],
    accounts,
    transactions,
  });
}