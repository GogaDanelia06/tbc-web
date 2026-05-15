import { useMemo } from "react";
import type { Account } from "./types";
import { convertAmount } from "./transferUtils";

export function useTransferPreview(
  accounts: Account[],
  fromAccountId: string,
  toAccountId: string,
  amount: string
) {
  const fromAccount = useMemo(
    () => accounts.find((acc) => String(acc.id) === fromAccountId),
    [accounts, fromAccountId]
  );

  const toAccount = useMemo(
    () => accounts.find((acc) => String(acc.id) === toAccountId),
    [accounts, toAccountId]
  );

  const convertedPreview = useMemo(() => {
    if (!fromAccount || !toAccount || !amount) return null;

    const numericAmount = Number(amount);
    if (!numericAmount || numericAmount <= 0) return null;

    if (fromAccount.currency === toAccount.currency) {
      return `${numericAmount.toFixed(2)} ${toAccount.currency}`;
    }

    const converted = convertAmount(
      numericAmount,
      fromAccount.currency,
      toAccount.currency
    );

    return `${converted.toFixed(2)} ${toAccount.currency}`;
  }, [amount, fromAccount, toAccount]);

  return {
    fromAccount,
    toAccount,
    convertedPreview,
  };
}