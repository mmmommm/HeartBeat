import React from "react";
import styles from "../styles/pages/index.module.scss";
import { Sidebar } from "../components/Sidebar";
const navItems = [
  {
    name: "YOASOBI",
    as: "/yoasobi",
    href: "/yoasobi"
  },
  {
    name: "zutomayo",
    as: "/zutomayo",
    href: "/zutomayo"
  }
]
const Index: React.FC = () => {
  return (
    <>
      <div>
        <Sidebar navItems={navItems} />
      </div>
      <p className={styles.font}>トップページ</p>
    </>
  );
};
export default Index;