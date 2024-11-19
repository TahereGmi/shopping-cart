import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
