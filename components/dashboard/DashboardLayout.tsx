import DashboardHeader from "./DashboardHeader";
import DashboardNav from "./DashboardNav";
import PromoCard from "./PromoCard";
import AccountCard from "./AccountCard";
import TransactionsCard from "./TransactionsCard";
import PersonalBanker from "./PersonalBanker";
import CurrencyCard from "./CurrencyCard";

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

type DashboardData = {
  user: User;
  accounts: Account[];
  transactions: Transaction[];
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
    <div className="min-h-screen bg-[#f3f4f6] text-[#14171f]">
      <DashboardHeader />
      <DashboardNav />

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[1fr_330px]">
        <section className="space-y-6">
          <PromoCard />

          <AccountCard
            accounts={data.accounts}
            labels={labels.accounts}
          />

          <TransactionsCard transactions={data.transactions} />
        </section>

        <aside className="space-y-6">
          <PersonalBanker />
          <CurrencyCard />
        </aside>
      </main>
    </div>
  );
}