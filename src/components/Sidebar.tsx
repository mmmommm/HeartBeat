import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import { NavItem, NavItems } from "@types";
const SidebarNavItem: React.FC<{ navItem: NavItem }> = ({ navItem }) => {
  // const router = useRouter();
  return (
    <Link href={navItem.href} as={navItem.as} passHref>
      <p>{navItem.name}</p>
    </Link>
  );
};
const SidebarHeader: React.FC = () => {
  return (
    <header>
      <Link href="/" passHref>
        logo
      </Link>
    </header>
  );
};
export const Sidebar: React.FC<{ navItems: NavItems }> = ({ navItems }) => {
  return (
    <aside>
      <SidebarHeader />
      <div>
        {navItems.map((navItem, i) => {
          return <SidebarNavItem navItem={navItem} key={i} />;
        })}
      </div>
    </aside>
  );
};