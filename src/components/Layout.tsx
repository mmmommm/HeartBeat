import React from "react";
import { Sidebar } from "./Sidebar";
import styles from "../styles/components/Layout.module.scss"

const navItems = [
  {
    name: "Top",
    as: "/",
    href: "/"
  },
  {
    name: "Search",
    as: "/search",
    href: "/search"
  },
  {
    name: "Request",
    as: "/request",
    href: "/request"
  },
  {
    name: "Language",
    as: "/language",
    href: "/language"
  },
]

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
