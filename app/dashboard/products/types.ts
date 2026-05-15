export type Account = {
  id: number;
  name: string;
  balance: number;
  currency: string;
};

export type DashboardData = {
  accounts: Account[];
};

export type ProductTab = {
  key: string;
  label: string;
};