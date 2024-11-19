import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import styles from './App.module.css';
import AddProductForm from './components/AddProduct';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ProductList />
      <AddProductForm />
    </div>
  );
}

export default App;
