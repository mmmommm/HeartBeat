import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SearchForm } from "../components/SearchForm";
import { NavItem, NavItems } from "../types";
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

const SidebarHeader: React.VFC = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>　</Link>
    </header>
  );
};

export const Sidebar: React.FC<{ navItems: NavItems }> = ({ navItems }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SidebarHeader />
        <SearchForm />
      </div>
      <ul className={styles.sidebar_item}>
        {navItems.map((navItem, i) => {
          return <SidebarNavItem navItem={navItem} key={i} />;
        })}
      </ul>
    </div>
  );
};
