import React, { useState } from "react";
import useStore from "../../store";
import styles from "./AddProduct.module.css";

const AddProductForm: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const { addItem } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addItem(input.trim());
      setInput("");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Add to list
      </button>
    </form>
  );
};

export default AddProductForm;
