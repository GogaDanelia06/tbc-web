import DashboardHeader from "./DashboardHeader"
import DashboardNav from "./DashboardNav";
import PromoCard from "./PromoCard";
import AccountCard from "./AccountCard";
import TransactionsCard from "./TransactionsCard";
import PersonalBanker from "./PersonalBanker";
import CurrencyCard from "./CurrencyCard";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#14171f]">
      <DashboardHeader />
      <DashboardNav />

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[1fr_330px]">
        <section className="space-y-6">
          <PromoCard />
          <AccountCard />
          <TransactionsCard />
        </section>

        <aside className="space-y-6">
          <PersonalBanker />
          <CurrencyCard />
        </aside>
      </main>
    </div>
  );
}