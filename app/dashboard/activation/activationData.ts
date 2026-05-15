import { CreditCard, Gift, ShieldCheck, Smartphone } from "lucide-react";

type LangMessage = (en: string, ka: string) => string;

export function getActivationCategories(langMessage: LangMessage) {
  return [
    langMessage("Debit cards", "სადებეტო ბარათები"),
    langMessage("Credit cards", "საკრედიტო ბარათები"),
    langMessage("Deposits", "ანაბრები"),
    langMessage("Insurance", "დაზღვევა"),
  ];
}

export function getActivationProducts(langMessage: LangMessage) {
  return [
    {
      title: langMessage("Order a debit card", "შეუკვეთე სადებეტო ბარათი"),
      desc: langMessage(
        "Get a new card without visiting a branch",
        "მიიღე ახალი ბარათი ფილიალში მისვლის გარეშე"
      ),
      icon: CreditCard,
    },
    {
      title: langMessage("Digital card", "ციფრული ბარათი"),
      desc: langMessage(
        "Activate a card instantly for online payments",
        "გაააქტიურე ბარათი ონლაინ გადახდებისთვის"
      ),
      icon: Smartphone,
    },
    {
      title: langMessage("Insurance package", "სადაზღვევო პაკეტი"),
      desc: langMessage(
        "Protect your card and online payments",
        "დაიცავი ბარათი და ონლაინ გადახდები"
      ),
      icon: ShieldCheck,
    },
    {
      title: langMessage("Special offers", "სპეციალური შეთავაზებები"),
      desc: langMessage(
        "See available banking offers for you",
        "ნახე შენთვის ხელმისაწვდომი შეთავაზებები"
      ),
      icon: Gift,
    },
  ];
}