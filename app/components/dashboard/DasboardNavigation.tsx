"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Tổng Quan",
    href: "/dashboard",
  },
  {
    name: "Đơn Hàng",
    href: "/dashboard/orders",
  },
  {
    name: "Sản Phẩm",
    href: "/dashboard/products",
  },
  {
    name: "Trang Banner",
    href: "/dashboard/banner",
  },
];

export function DashboardNavigation() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            link.href === pathname
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
