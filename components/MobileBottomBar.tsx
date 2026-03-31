"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineHome,
  HiOutlineTruck,
  HiOutlineUserGroup,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

const tabs = [
  { href: "/", label: "Home", icon: HiOutlineHome },
  { href: "/cars", label: "Cars", icon: HiOutlineTruck },
  { href: "/services", label: "Services", icon: HiOutlineWrenchScrewdriver },
  { href: "/about", label: "About", icon: HiOutlineUserGroup },
  { href: "/contact", label: "Contact", icon: HiOutlineChatBubbleLeftRight },
];

export default function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur-lg md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around px-2 py-1">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-0.5 rounded-xl px-3 py-1.5 text-[10px] font-medium transition-colors ${
                isActive
                  ? "text-brand-700"
                  : "text-slate-500 active:text-brand-700"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-brand-700" : ""}`} />
              <span>{tab.label}</span>
              {isActive && (
                <span className="mt-0.5 h-1 w-1 rounded-full bg-brand-700" />
              )}
            </Link>
          );
        })}
      </div>
      {/* Safe area for phones with home indicator */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
