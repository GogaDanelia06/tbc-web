const transactions = [
  ["24 აპრ 2026", "OPIUMI, TBILISI, GE", "-5,60₾"],
  ["23 აპრ 2026", "APPLE.COM/BILL, ITUNES.COM, IE", "-0,69$"],
  ["22 აპრ 2026", "APPLE.COM/BILL, ITUNES.COM, IE", "-5,79$"],
  ["22 აპრ 2026", "ORI NABIIJI, TBILISI, GE", "-2,18₾"],
];

export default function TransactionsCard() {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <h3 className="border-b border-gray-200 p-6 text-lg font-bold">
        ბოლო ტრანზაქციები
      </h3>

      {transactions.map(([date, title, amount]) => (
        <div key={title + amount} className="grid grid-cols-[120px_1fr_100px] border-b border-gray-100 px-6 py-4 last:border-0">
          <span className="text-sm">{date}</span>
          <span>{title}</span>
          <span className="text-right">{amount}</span>
        </div>
      ))}
    </section>
  );
}