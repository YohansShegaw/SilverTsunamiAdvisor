"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import {
  Sidebar as AceternitySidebar,
  SidebarBody,
  SidebarLink as BaseSidebarLink,
} from "@/components/ui/sidebar";
import {
  IconUsers,
  IconLayoutDashboard,
  IconCreditCard,
  IconLogout,
  IconPackage,
  IconMessageCircle,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = {
  ADMIN: [
    { label: "Dashboard", href: "/admin/dashboard", icon: <IconLayoutDashboard /> },
    { label: "Inventory", href: "/admin/inventory", icon: <IconPackage /> },
    { label: "Users", href: "/admin/users", icon: <IconUsers /> },
    { label: "Message", href: "/admin/messages", icon: <IconMessageCircle /> },
  ],
  USER: [
    { label: "Dashboard", href: "/user/dashboard", icon: <IconLayoutDashboard /> },
  ],
};

const Logo = () => (
  <Link href="#" className="flex items-center space-x-2 py-1 text-sm font-normal">
    <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-white" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium whitespace-pre text-white"
    >
      Inventory & Sales Tracker
    </motion.span>
  </Link>
);

const LogoIcon = () => (
  <Link href="#" className="flex items-center py-1">
    <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-white" />
  </Link>
);

// Enhanced SidebarLink to show active styles
const SidebarLink = ({
  link,
  open,
}: {
  link: { label: string; href: string; icon: React.ReactNode };
  open: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <a
      href={link.href}
      className={cn(
        "flex items-center py-2 transition-all group/sidebar rounded-md",
        open ? "gap-2 px-3" : "justify-center px-1",
        isActive
          ? "text-white"
          : "text-neutral-500 hover:text-white hover:bg-neutral-700"
      )}
    >
      <div
        className={cn(
          "text-lg",
          isActive ? "text-white" : "text-neutral-500 group-hover/sidebar:text-white"
        )}
      >
        {link.icon}
      </div>

      {open && (
        <motion.span
          initial={false}
          animate={{ opacity: open ? 1 : 0 }}
          className={cn(
            "text-sm whitespace-pre transition-opacity",
            isActive ? "text-white" : "text-neutral-500 group-hover/sidebar:text-white"
          )}
        >
          {link.label}
        </motion.span>
      )}
    </a>
  );
};


export function Sidebar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleLogout = async () => {
    await logout();
    router.push("/#login");
  };

  const getNavItems = () => {
    if (!user?.roles) return [];
    if (user.roles.includes("ROLE_ADMIN")) return navItems.ADMIN;
    if (user.roles.includes("ROLE_USER")) return navItems.USER;
    return [];
  };

  const currentNavItems = getNavItems();

  return (
    <AceternitySidebar open={open} setOpen={setOpen}>
      <SidebarBody className="flex flex-col h-full">
        {/* Sticky Logo/Header */}
        <div className="sticky top-0 z-10 py-3 shadow-md border-b border-gray-700 bg-neutral-100 dark:bg-neutral-800">
          {open ? <Logo /> : <LogoIcon />}
        </div>

        {/* Scrollable nav links */}
        <div className="flex-1 overflow-y-auto scrollbar-hide mt-4">
          <div className="flex flex-col gap-2">
            {currentNavItems.map((item) => (
              <SidebarLink key={item.label} link={item} open={open} />
            ))}
          </div>
        </div>

        {/* Fixed footer at bottom */}
        <div className="py-4 border-t border-gray-700 bg-neutral-100 dark:bg-neutral-800">
          <BaseSidebarLink
            link={{
              label: user?.email ?? "User",
              href: "#",
              icon: (
                <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-green-500" />
              ),
            }}
            className={cn(open ? "px-3" : "justify-center px-1")}
          />
          <div
            onClick={handleLogout}
            className="mt-2 flex items-center justify-start gap-2 group/sidebar py-2 cursor-pointer"
          >
            <IconLogout className="h-5 w-5 text-neutral-400 group-hover/sidebar:text-white" />
            <span
              className={cn(
                "text-neutral-400 group-hover/sidebar:text-white text-sm",
                open ? "inline-block" : "hidden"
              )}
            >
              Logout
            </span>
          </div>
        </div>
      </SidebarBody>
    </AceternitySidebar>
  );
}
