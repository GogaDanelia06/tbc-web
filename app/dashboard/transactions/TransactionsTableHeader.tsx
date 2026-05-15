type Props = {
  t: {
    transactionsPage: {
      date: string;
      category: string;
      details: string;
      account: string;
      amount: string;
    };
  };
};

export default function TransactionsTableHeader({ t }: Props) {
  return (
    <div className="grid grid-cols-[130px_280px_1fr_180px_120px] bg-[#f7f8fa] px-8 py-4 text-sm font-semibold text-gray-500 dark:bg-[#111827] dark:text-gray-300">
      <span>{t.transactionsPage.date}</span>
      <span>{t.transactionsPage.category}</span>
      <span>{t.transactionsPage.details}</span>
      <span>{t.transactionsPage.account}</span>
      <span className="text-right">{t.transactionsPage.amount}</span>
    </div>
  );
}