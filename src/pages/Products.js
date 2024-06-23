import { useState, useEffect } from "react";

import PageHeader from "../components/header/PageHeader";
import ProductsList from "../components/products/ProductsList";
import ProductProvider from "../store/ProductProvider";

function ProductsPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);

      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        throw new Error("Could not fetch events!");
      } else {
        const data = await res.json();

        setAllProducts(data.products);
      }
      setIsLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <ProductProvider>
        <PageHeader />
        {isLoading && <p>Loading...</p>}
        {!isLoading && <ProductsList products={allProducts} />}
      </ProductProvider>
    </>
  );
}

export default ProductsPage;

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(data => console.log(data));
