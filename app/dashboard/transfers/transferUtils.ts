export const ratesToGel: Record<string, number> = {
  GEL: 1,
  USD: 2.7,
  EUR: 3.15,
};

export function convertAmount(amount: number, from: string, to: string) {
  const amountInGel = amount * ratesToGel[from];
  return amountInGel / ratesToGel[to];
}

export function maskAccountNumber(id?: number) {
  if (!id) return "GE•• •••• •••• ••••";
  return `GE•• •••• •••• ${String(id).padStart(4, "0")}`;
}