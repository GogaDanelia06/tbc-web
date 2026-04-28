export function getNavItems(t: any) {
  return [
    { label: t.nav.home, href: "/dashboard", icon: "⌂" },
    { label: t.nav.products, href: "/dashboard/products", icon: "▣" },
    {
      label: t.nav.transfers,
      href: "/dashboard/transfers",
      icon: "↔",
      menu: true,
    },
    { label: t.nav.transactions, href: "/dashboard/transactions", icon: "▤" },
    { label: t.nav.finance, href: "/dashboard/finance", icon: "◔" },
    { label: t.nav.activation, href: "/dashboard/activation", icon: "✓" },
  ];
}

export function getTransferMenu(t: any) {
  return [
    t.transferMenu.betweenOwn,
    t.transferMenu.someoneElse,
    t.transferMenu.mobile,
    t.transferMenu.treasury,
    "-",
    t.transferMenu.send,
    t.transferMenu.receive,
    t.transferMenu.history,
    "-",
    t.transferMenu.topUp,
    t.transferMenu.bill,
    t.transferMenu.parking,
    "-",
    t.transferMenu.templates,
    "-",
    t.transferMenu.standing,
  ];
}