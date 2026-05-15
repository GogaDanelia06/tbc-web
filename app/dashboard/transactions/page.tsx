import { getTransactions } from "@/lib/transactions";
import TransactionsClient from "@/app/dashboard/transactions/TransactionsClient";

export default async function TransactionsPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const transactions = await getTransactions();

  return <TransactionsClient transactions={transactions} />;
}