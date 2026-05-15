"use client";

type Props = {
  categories: string[];
};

export default function ActivationSidebar({ categories }: Props) {
  return (
    <aside className="border-b border-gray-200 p-7 dark:border-[#1f2937] lg:border-b-0 lg:border-r">
      <div className="space-y-5">
        {categories.map((item, index) => (
          <button
            key={item}
            className={`block w-full text-left text-base font-semibold transition ${
              index === 0
                ? "border-b-2 border-[#1237d5] pb-3 text-gray-800 dark:text-white"
                : "text-gray-500 hover:text-[#1237d5]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </aside>
  );
}