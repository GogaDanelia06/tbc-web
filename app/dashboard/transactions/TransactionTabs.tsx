type Props = {
  t: {
    transactionsPage: {
      tabs: {
        transactions: string;
        statements: string;
        futurePayments: string;
      };
    };
  };
};

export default function TransactionsTabs({ t }: Props) {
  return (
    <div className="flex items-center gap-8 border-b border-gray-200 px-8 dark:border-[#1f2937]">
      <button className="border-b-4 border-[#1d4ed8] py-5 font-semibold text-[#1d4ed8]">
        {t.transactionsPage.tabs.transactions}
      </button>

      <button className="py-5 font-semibold text-gray-500 hover:text-[#1d4ed8]">
        {t.transactionsPage.tabs.statements}
      </button>

      <button className="py-5 font-semibold text-gray-500 hover:text-[#1d4ed8]">
        {t.transactionsPage.tabs.futurePayments}
      </button>
    </div>
  );
}