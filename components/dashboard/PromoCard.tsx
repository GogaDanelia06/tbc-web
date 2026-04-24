export default function PromoCard() {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="grid grid-cols-[280px_1fr]">
        <div className="h-28 bg-[url('/dashboard-promo.jpg')] bg-cover bg-center" />

        <div className="flex flex-col justify-center px-8">
          <h2 className="mb-2 text-xl font-bold">სამოგზაურო შეთავაზებები</h2>
          <p className="text-sm text-gray-500">
            ისარგებლე თიბისი კონცეპტის მრავალფეროვანი სამოგზაურო შეთავაზებებით
          </p>
        </div>
      </div>
    </section>
  );
}