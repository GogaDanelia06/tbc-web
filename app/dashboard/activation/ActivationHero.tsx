"use client";

type Props = {
  langMessage: (en: string, ka: string) => string;
};

export default function ActivationHero({ langMessage }: Props) {
  return (
    <div className="mt-8 overflow-hidden rounded-[18px] border border-gray-200 bg-white shadow-sm dark:border-[#1f2937] dark:bg-[#0f172a]">
      <div className="grid md:grid-cols-[42%_58%]">
        <div className="min-h-52 bg-gradient-to from-[#dbeafe] via-[#f8fafc] to-[#bfdbfe] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#1237d5]/40" />

        <div className="flex min-h-52 items-center justify-between gap-6 p-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {langMessage("Travel comfortably", "იმოგზაურე კომფორტულად")}
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
              {langMessage(
                "Activate banking products and services directly from internet banking.",
                "გაააქტიურე საბანკო პროდუქტები და სერვისები ინტერნეტ ბანკიდან."
              )}
            </p>
          </div>

          <button className="h-14 rounded-lg bg-[#1237d5] px-8 font-semibold text-white transition hover:bg-[#0f2fc0]">
            {langMessage("Learn more", "გაიგე მეტი")}
          </button>
        </div>
      </div>
    </div>
  );
}