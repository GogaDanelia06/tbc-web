import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(req: Request) {
  const { userId, month, day } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  const selectedMonth = month ?? new Date().toISOString().slice(0, 7);

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

  const pension = await sql`
    SELECT amount, currency
    FROM pension_savings
    WHERE user_id = ${userId}
    LIMIT 1
  `;

  const cashflowItems = day
    ? await sql`
        SELECT id, label, amount, transaction_date
        FROM cashflow_items
        WHERE user_id = ${userId}
        AND transaction_date = ${day}
        ORDER BY amount DESC
      `
    : await sql`
        SELECT id, label, amount, transaction_date
        FROM cashflow_items
        WHERE user_id = ${userId}
        AND TO_CHAR(transaction_date, 'YYYY-MM') = ${selectedMonth}
        ORDER BY amount DESC
      `;

  const cashflowTotal = cashflowItems.reduce((sum, item) => {
    return sum + Number(item.amount);
  }, 0);

  return NextResponse.json({
    user: users[0],
    accounts,
    transactions,
    pension: pension[0] ?? {
      amount: "0.00",
      currency: "GEL",
    },
    cashflow: {
      total: cashflowTotal.toFixed(2),
      items: cashflowItems,
    },
  });
}