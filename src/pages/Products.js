import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import PageHeader from "../components/header/PageHeader";
import ProductsList from "../components/products/ProductsList";
import ProductProvider from "../store/ProductProvider";
import LoginContext from "../store/login-context";

function ProductsPage(props) {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);

      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        throw new Error("Could not fetch events!");
      }
      const data = await res.json();

      setAllProducts(data.products);
      setIsLoading(false);
    }
    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <LoginContext.Provider
      value={{ isLoggedIn: false, onLogout: logoutHandler }}
    >
      <ProductProvider>
        <PageHeader />
        {isLoading && <p>Loading...</p>}
        {!isLoading && <ProductsList products={allProducts} />}
        {httpError && <p>Could not fetch events!</p>}
      </ProductProvider>
    </LoginContext.Provider>
  );
}

export default ProductsPage;

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(data => console.log(data));
