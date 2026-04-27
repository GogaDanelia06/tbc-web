import PromoCard from "./PromoCard";
import AccountCard from "./AccountCard";
import TransactionsCard from "./TransactionsCard";
import PersonalBanker from "./PersonalBanker";
import CurrencyCard from "./CurrencyCard";
import PensionSavingsCard from "./PensionSavingsCard";
import CashflowCard from "./CashflowCard";

type User = {
  id: number;
  username: string;
  full_name: string;
};

type Account = {
  id: number;
  name: string;
  balance: string;
  currency: string;
};

type Transaction = {
  id: number;
  title: string;
  amount: string;
  date: string;
};

type Pension = {
  amount: string;
  currency: string;
};

type CashflowItem = {
  id: number;
  label: string;
  amount: string;
};

type DashboardData = {
  user: User;
  accounts: Account[];
  transactions: Transaction[];
  pension: Pension;
  cashflow: {
    total: string;
    items: CashflowItem[];
  };
};

type DashboardLabels = {
  accounts: {
    title: string;
    totalAvailable: string;
    cardLabel: string;
  };
};

type DashboardLayoutProps = {
  data: DashboardData;
  labels: DashboardLabels;
};

export default function DashboardLayout({
  data,
  labels,
}: DashboardLayoutProps) {
  return (
    <div className="grid w-full max-w-7xl grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[1fr_330px]">
      <section className="space-y-6">
        <PromoCard />

        <AccountCard accounts={data.accounts} labels={labels.accounts} />

        <TransactionsCard transactions={data.transactions} />
      </section>

      <aside className="space-y-6">
        <PersonalBanker />
        <CurrencyCard />
        <PensionSavingsCard pension={data.pension} />
        <CashflowCard cashflow={data.cashflow} />
      </aside>
    </div>
  );
}