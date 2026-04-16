"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: 'profile', href: '/profile' },
  { name: 'work', href: '/works' },
  { name: 'blog', href: '/blog' }, 
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    // justify-start -> justify-center (中央揃え)
    <nav className="flex flex-row flex-wrap justify-center gap-4 w-full">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              px-8 py-3 text-lg font-bold rounded-full transition duration-300
              border-4
              ${isActive 
                ? "bg-white text-black border-white"
                : "bg-transparent text-white border-white/40 hover:bg-white hover:text-black hover:border-transparent"
              }
            `}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}