"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Product 1", href: "/products/1", match: "/products" },
];

const Navigation = () => {
  const pathName = usePathname();

  return (
    <nav className="text-center py-3">
      {navLinks.map(({ label, href, match }) => {
        const isActive = match ? pathName.startsWith(match) : pathName === href;

        return (
          <Link key={href} href={href} className={isActive ? "font-bold mr-4" : "mr-4 text-blue-500"}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
