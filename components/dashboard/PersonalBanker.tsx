export default function PersonalBanker() {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <h3 className="border-b border-gray-200 p-5 text-lg font-bold">
        ჩემი პირადი ბანკირი
      </h3>

      <div className="p-5">
        <div className="mb-4 flex gap-4">
          <div className="h-24 w-24 rounded-lg bg-gray-200" />
          <div>
            <h4 className="text-xl font-bold text-blue-700">თამუნა </h4>
            <p className="mt-2 text-sm">გამარჯობა, მზად ვარ დაგეხმაროთ</p>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <p>☎ 555</p>
          <p>✉ tt@tbcbank.com.ge</p>
          <p className="text-blue-700">🌐 tbcconcept.ge</p>
          <p>concept@tbcbank.ge</p>
        </div>
      </div>
    </section>
  );
}