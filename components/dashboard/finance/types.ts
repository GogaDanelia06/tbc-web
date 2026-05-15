export type Segment = {
  id: number;
  label: string;
  value: number;
  percent: number;
  icon: string;
  color: string;
};

export type FinanceData = {
  summary: {
    assets: number;
    liabilities: number;
  };
  transactions: {
    id: number;
    title: string;
    amount: string;
    date: string;
  }[];
};