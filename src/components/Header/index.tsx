import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const handleClearClick = () => {
    alert("Clear all items!");
  };

  return (
    <header className={styles.pageHeader}>
      <h1 className={styles.pageTitle}>Shopping List</h1>
      <button className={styles.clearButton} onClick={handleClearClick}>
        delete
      </button>
    </header>
  );
};

export default Header;
