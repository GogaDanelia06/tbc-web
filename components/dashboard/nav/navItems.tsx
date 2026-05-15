type NavItem = {
  label: string;
  href: string;
  icon: string;
  menu?: boolean;
};

type TransferMenuItem = {
  key: string; // ✅ ADD THIS
  label: string;
  href: string;
};

type Translation = {
  nav: {
    home: string;
    products: string;
    transfers: string;
    transactions: string;
    finance: string;
    activation: string;
  };
  transferMenu: {
    betweenOwn: string;
    someoneElse: string;
    mobile: string;
    treasury: string;
    send: string;
    receive: string;
    history: string;
    templates: string;
    standing: string;
  };
};

export function getNavItems(t: Translation): NavItem[] {
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

export function getTransferMenu(t: Translation): TransferMenuItem[] {
  return [
    {
      key: "betweenOwn",
      label: t.transferMenu.betweenOwn,
      href: "/dashboard/transfers",
    },
    {
      key: "someoneElse",
      label: t.transferMenu.someoneElse,
      href: "/dashboard/transfers",
    },
    {
      key: "mobile",
      label: t.transferMenu.mobile,
      href: "/dashboard/transfers",
    },
    {
      key: "treasury",
      label: t.transferMenu.treasury,
      href: "/dashboard/transfers",
    },
    {
      key: "send",
      label: t.transferMenu.send,
      href: "/dashboard/transfers",
    },
    {
      key: "receive",
      label: t.transferMenu.receive,
      href: "/dashboard/transfers",
    },
    {
      key: "history",
      label: t.transferMenu.history,
      href: "/dashboard/transfers/history",
    },
    {
      key: "templates",
      label: t.transferMenu.templates,
      href: "/dashboard/transfers/templates",
    },
    {
      key: "standing",
      label: t.transferMenu.standing,
      href: "/dashboard/transfers",
    },
  ];
}