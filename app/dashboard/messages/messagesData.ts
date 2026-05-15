export const messages = [
  {
    id: 1,
    date: "15/Apr/26",
    title: "System maintenance scheduled",
    desc: "Please note that banking systems will be unavailable temporarily.",
    body: "Please note that on April 17, from 03:00 AM to 07:00 AM, scheduled maintenance will be performed. During this time, internet banking, mobile banking, card operations, and some electronic services may be temporarily unavailable.",
  },
  {
    id: 2,
    date: "15/Apr/26",
    title: "Push Notification",
    desc: "Activate push notifications for safer banking.",
    body: "You can activate push notifications to receive instant updates about your transactions, transfers, and account activity.",
  },
  {
    id: 3,
    date: "07/Apr/26",
    title: "Card limits",
    desc: "Information about card daily limits.",
    body: "You can manage card limits from internet banking. Set daily spending, withdrawal, and online payment limits anytime.",
  },
  {
    id: 4,
    date: "13/Mar/26",
    title: "Deposit insurance",
    desc: "Important information about deposit insurance.",
    body: "Your deposits are protected according to applicable banking regulations. Please review the details in your banking profile.",
  },
];

export type MessageItem = (typeof messages)[number];