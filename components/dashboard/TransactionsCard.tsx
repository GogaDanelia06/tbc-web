type Transaction = {
  id: number;
  title: string;
  amount: string;
  date: string;
};

export default function TransactionsCard({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <h3 className="border-b border-gray-200 p-6 text-lg font-bold">
        ბოლო ტრანზაქციები
      </h3>

      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="grid grid-cols-[120px_1fr_100px] border-b border-gray-100 px-6 py-4 last:border-0"
        >
          <span className="text-sm">{tx.date}</span>
          <span>{tx.title}</span>
          <span className="text-right">{tx.amount}</span>
        </div>
      ))}
    </section>
  );
}