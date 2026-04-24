import Image from "next/image";

type LoginQRProps = {
  t: {
    qrTitle: string;
    qrDesc: string;
  };
};

export default function LoginQR({ t }: LoginQRProps) {
  return (
    <div className="flex flex-col items-center md:items-start shrink-0 border-b border-[#e8ecf0] p-5 sm:p-6 md:w-56 md:border-b-0 md:border-r md:p-8 md:pr-8">
      <h2 className="mb-2 text-[18px] font-bold text-[#1a1a2e] md:mb-2.5 md:text-[20px]">
        {t.qrTitle}
      </h2>

      <p className="mb-4 text-[12px] leading-relaxed text-[#6b7a8d] md:mb-5 md:text-[13px]">
        {t.qrDesc}
      </p>

      <div className="inline-flex items-center justify-center rounded-[10px] border border-[#dde2ea] bg-white p-2.5 md:border-[1.5px] md:p-3">
        <Image
          src="/qr.png"
          alt="QR"
          width={120}
          height={120}
          priority
          className="h-auto w-24 sm:w-28 md:w-28"
        />
      </div>
    </div>
  );
}