export type Account = {
  id: number;
  name: string;
  balance: number;
  currency: string;
};

export type TransferType = "own" | "someone" | "mobile" | "treasury";