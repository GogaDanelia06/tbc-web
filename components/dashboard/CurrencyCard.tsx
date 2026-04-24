const rates = [
  ["🇺🇸 USD", "2,6936", "↓ 0,0002"],
  ["🇪🇺 EUR", "3,1464", "↓ 0,0188"],
  ["🇬🇧 GBP", "3,6334", "↓ 0,0086"],
];

export default function CurrencyCard() {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <h3 className="border-b border-gray-200 p-5 text-lg font-bold">
        ვალუტის კონვერტაცია
      </h3>

      <div className="space-y-4 p-5">
        {rates.map(([currency, value, change]) => (
          <div key={currency} className="flex items-center justify-between">
            <span className="font-bold">{currency}</span>
            <span className="font-bold">{value}</span>
            <span className="text-sm text-red-500">{change}</span>
          </div>
        ))}
      </div>
    </section>
  );
}