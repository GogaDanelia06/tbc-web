import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { mockAccounts, mockTransactions } from "@/lib/mockData";

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const userId = Number(cookieStore.get("userId")?.value);

    if (!userId || Number.isNaN(userId)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const fromAccountId = Number(body.fromAccountId);
    const toAccountId = Number(body.toAccountId);
    const amount = Number(body.amount);

    if (!fromAccountId || !toAccountId || !amount || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid transfer data" },
        { status: 400 }
      );
    }

    const fromAccount = mockAccounts.find(
      (account) => account.id === fromAccountId && account.user_id === userId
    );

    const toAccount = mockAccounts.find(
      (account) => account.id === toAccountId && account.user_id === userId
    );

    if (!fromAccount || !toAccount) {
      return NextResponse.json(
        { error: "Account not found" },
        { status: 404 }
      );
    }

    if (fromAccount.balance < amount) {
      return NextResponse.json(
        { error: "Insufficient balance" },
        { status: 400 }
      );
    }

    fromAccount.balance = Number((fromAccount.balance - amount).toFixed(2));
    toAccount.balance = Number((toAccount.balance + amount).toFixed(2));

    const newTransaction = {
      id: Date.now(),
      user_id: userId,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      category: "Transfer",
      details: `Transfer to ${toAccount.name}`,
      account: fromAccount.name,
      amount: `-${amount.toFixed(2)}₾`,
      status: "Completed",
      color: "blue",
    };

    mockTransactions.unshift(newTransaction);

    return NextResponse.json({
      success: true,
      accounts: {
        fromAccount,
        toAccount,
      },
      transaction: newTransaction,
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}