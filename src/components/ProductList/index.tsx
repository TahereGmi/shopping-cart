import React, { useEffect } from "react";
import useStore from "../../store";
import ProductItem from "../ProductItem";
import { Product } from "./../../types/types";
import styles from "./ProductList.module.css";

const ProductList: React.FC = () => {
  const {
    items: products,
    fetchItems,
    toggleItem: onToggle,
    isLoading,
    error,
  } = useStore();

  useEffect(() => {
    fetchItems();
  }, []);

  console.log('products', products);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.list}>
      {products?.map((product: Product) => (
        <ProductItem
          key={product.id}
          title={product.title}
          src={product.base64Image}
          checked={product.checked}
          onToggle={() => onToggle(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
