const cards = [
  { name: "ბარათი", type: "TBC CARD", amount: "835,10 GEL" },
  { name: "ბარათი", type: "STUDENT CARD", amount: "0,00 USD" },
  { name: "ბარათი", type: "STUDENT CARD", amount: "0,00 USD" },
];

export default function AccountCard() {
  return (
    <section className="grid grid-cols-[260px_1fr] overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="border-r border-gray-200 p-6">
        <h3 className="mb-4 text-lg font-bold">ანგარიშები</h3>
        <p className="text-sm text-gray-400">სულ ხელმისაწვდომი:</p>
        <p className="text-xl font-bold">835,10 GEL</p>
      </div>

      <div>
        {cards.map((card) => (
          <div key={card.type + card.amount} className="flex items-center justify-between border-b border-gray-100 px-6 py-3 last:border-0">
            <div>
              <p className="font-bold">{card.name}</p>
              <p className="text-sm text-gray-500">{card.type}</p>
            </div>
            <p className="font-bold">{card.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
}