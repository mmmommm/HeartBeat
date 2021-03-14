import React from "react";
import { Sidebar } from "./Sidebar";
import styles from "../styles/components/Layout.module.scss";

const navItems = [
  {
    name: "Top",
    as: "/",
    href: "/",
  },
  // {
  //   name: "Search",
  //   as: "/Search",
  //   href: "/Search",
  // },
  {
    name: "Request",
    as: "/Request",
    href: "/Request",
  },
  {
    name: "Language",
    as: "/Language",
    href: "/Language",
  },
];

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <aside className={styles.layout_sidebar}>
        <Sidebar navItems={navItems} />
      </aside>
      <main className={styles.layout_content}>{children}</main>
    </div>
  );
};
