import React from "react";
import Products from "./components/Products";
import { Routes, Route } from 'react-router-dom';
import ProductPage from "./components/ProductPage";
import App from "./App";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Products />} />
        <Route path="product/:slug" element={<ProductPage />} />
        <Route path="*" element={<h1>Something went wrong...</h1>} />
      </Route>
    </Routes>
  )
}

export default Root;