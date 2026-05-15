import { mockTransactions } from "@/lib/mockData";

export type Transaction = {
  id: number;
  date: string;
  category: string;
  details: string;
  account: string;
  amount: string;
  status: string;
  color: string;
};

export async function getTransactions() {
  return mockTransactions;
}