import bcrypt from "bcryptjs";

export type MockUser = {
  id: number;
  username: string;
  full_name: string;
  password_hash: string;
};

export type MockAccount = {
  id: number;
  user_id: number;
  name: string;
  balance: number;
  currency: "GEL" | "USD" | "EUR";
};

export type MockTransaction = {
  id: number;
  user_id: number;
  date: string;
  category: string;
  details: string;
  account: string;
  amount: string;
  status: string;
  color: string;
};

export type MockTemplate = {
  id: number;
  user_id: number;
  name: string;
  iban: string;
  currency: "GEL" | "USD" | "EUR";
  verified: boolean;
};

export type MockPension = {
  user_id: number;
  amount: string;
  currency: "GEL" | "USD" | "EUR";
};

const globalStore = globalThis as unknown as {
  mockUsersStore?: MockUser[];
  mockAccountsStore?: MockAccount[];
  mockTransactionsStore?: MockTransaction[];
  mockTemplatesStore?: MockTemplate[];
  mockPensionStore?: MockPension[];
};

globalStore.mockUsersStore ??= [
  {
    id: 1,
    username: "goga",
    full_name: "Goga Danelia",
    password_hash: bcrypt.hashSync("1234", 10),
  },
  {
  id: 2,
  username: "mariami",
  full_name: "mariami",
  password_hash: bcrypt.hashSync("1234", 10),
},
];

globalStore.mockAccountsStore ??= [
  {
    id: 1,
    user_id: 1,
    name: "Current Account",
    balance: 2450.75,
    currency: "GEL",
  },
  {
    id: 2,
    user_id: 1,
    name: "USD Account",
    balance: 850.25,
    currency: "USD",
  },
  {
    id: 3,
    user_id: 1,
    name: "EUR Account",
    balance: 430.5,
    currency: "EUR",
  },
  {
  id: 4,
  user_id: 2,
  name: "Mariami Account",
  balance: 50000,
  currency: "GEL",
},
{
  id: 5,
  user_id: 2,
  name: "Mariami Account",
  balance: 50000,
  currency: "EUR",
},
];

globalStore.mockTransactionsStore ??= [
  {
    id: 1,
    user_id: 1,
    date: "30 Apr 2026",
    category: "Shopping",
    details: "POS Payment - Carrefour",
    account: "Current Account",
    amount: "-45.90₾",
    status: "Completed",
    color: "blue",
  },
  {
    id: 2,
    user_id: 1,
    date: "29 Apr 2026",
    category: "Transfer",
    details: "Transfer from Mariami",
    account: "Current Account",
    amount: "+300.00₾",
    status: "Completed",
    color: "green",
  },
];

globalStore.mockTemplatesStore ??= [
  {
    id: 1,
    user_id: 1,
    name: "Mariami",
    iban: "GE29TB0000000000000001",
    currency: "GEL",
    verified: true,
  },
];

globalStore.mockPensionStore ??= [
  {
    user_id: 1,
    amount: "1250.00",
    currency: "GEL",
  },
];

export const mockUsers = globalStore.mockUsersStore;
export const mockAccounts = globalStore.mockAccountsStore;
export const mockTransactions = globalStore.mockTransactionsStore;
export const mockTemplates = globalStore.mockTemplatesStore;
export const mockPension = globalStore.mockPensionStore;