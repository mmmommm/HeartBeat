import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavItem, NavItems } from "@types";
import styles from "../styles/components/Sidebar.module.scss";

const SidebarNavItem: React.FC<{ navItem: NavItem }> = ({ navItem }) => {
  const router = useRouter();
  const className = `${styles.sidebar_content} ${router.asPath === navItem.as ? styles.active : ""}`;
  return (
    <li className={styles.sidebar_nav_item}>
      <Link href={navItem.href} as={navItem.as} passHref>
        <span className={className}>{navItem.name}</span>
      </Link>
    </li>
  );
};

const SidebarHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        logo
      </Link>
    </header>
  );
};

export const Sidebar: React.FC<{ navItems: NavItems }> = ({ navItems }) => {
  return (
    <>
      <SidebarHeader />
      <ul className={styles.sidebar_item}>
        {navItems.map((navItem, i) => {
          return <SidebarNavItem navItem={navItem} key={i} />;
        })}
      </ul>
    </>
  );
};