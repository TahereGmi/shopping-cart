import React from "react";
import TrashIcon from "../../Constants/TrashIcon";
import useStore from "../../store";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const { deleteCheckedItems } = useStore();

  return (
    <header className={styles.pageHeader}>
      <h1 className={styles.pageTitle}>Shopping List</h1>
      <button className={styles.clearButton} onClick={deleteCheckedItems}>
        <TrashIcon />
      </button>
    </header>
  );
};

export default Header;
