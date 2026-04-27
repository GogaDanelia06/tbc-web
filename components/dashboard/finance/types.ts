export type CashflowItem = {
  id: number;
  label: string;
  amount: string;
};

export type Segment = CashflowItem & {
  value: number;
  percent: number;
  icon: string;
  color: string;
};

export type FinanceData = {
  cashflow: {
    total: string;
    items: CashflowItem[];
  };
};