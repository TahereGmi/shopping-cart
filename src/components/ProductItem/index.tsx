import React, { useState } from "react";
import { ImageSrc } from "../../Constants";
import styles from "./ProductItem.module.css";

type Props = {
  title?: string;
  checked?: boolean;
  src?: string;
  onToggle: () => void;
};

const ProductItem: React.FC<Props> = ({
  title,
  checked = false,
  src,
  onToggle,
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => setImgSrc(ImageSrc);
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={imgSrc || ImageSrc} alt={title} onEnded={handleError} />
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
