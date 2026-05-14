export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Academy", href: "/academy" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];
