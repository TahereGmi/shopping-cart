import React from "react";
import styles from "./ProductItem.module.css";

type Props = {
  title?: string;
  checked?: boolean;
  src?: string;
  onToggle: () => void;
};

const ProductItem: React.FC<Props> = ({ title, checked = false, src, onToggle }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={src} alt={title} />
      </div>
      <span className={styles.name}>{title}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className={styles.checkbox}
      />
    </div>
  );
};

export default ProductItem;
