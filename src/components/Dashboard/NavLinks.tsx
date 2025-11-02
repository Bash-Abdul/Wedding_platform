"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function cx(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(" ");
}

type NavLinkProps = {
  href: string,
  exact?: boolean,
  className?: string,
  activeClassName?: string,
  children: React.ReactNode,
};

export function NavLink({
  href,
  exact = false,
  className,
  activeClassName = "bg-[#f7bacf]/20 text-[#181113]",
  children,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cx(
        "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors",
        isActive && activeClassName,
        className
      )}
    >
      {children}
    </Link>
  );
}
