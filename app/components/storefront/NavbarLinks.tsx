"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
  {
    id: 0,
    name: "Trang chủ",
    href: "/",
  },
  {
    id: 1,
    name: "Tất Cả Sản Phẩm",
    href: "/products/all",
  },
  {
    id: 2,
    name: "Thực Phẩm",
    href: "/products/men",
  },
  {
    id: 3,
    name: "Hàng Gia Dụng",
    href: "/products/women",
  },
  {
    id: 4,
    name: "Thời Trang",
    href: "/products/kids",
  },
];

export function NavbarLinks() {
  const location = usePathname();
  return (
    <div className="hidden md:flex justify-center items-center gap-x-2 ml-8">
      {navbarLinks.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={cn(
            location === item.href
              ? "bg-muted"
              : "hover:bg-muted hover:bg-opacity-75",
            "group p-2 font-medium rounded-md"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
