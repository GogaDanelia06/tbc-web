export type Account = {
  id: number;
  name: string;
  balance: string;
  currency: string;
};

export type DashboardData = {
  accounts: Account[];
};

export type ProductTab = {
  key: string;
  label: string;
};