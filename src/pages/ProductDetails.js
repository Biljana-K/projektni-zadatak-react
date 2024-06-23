import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import ProductDetail from "../components/products/ProductDetail";

function ProductDetailsPage(props) {
  const params = useParams();
  const [productDetail, setProductDetail] = useState([]);

  const showProductDetails = useCallback(async () => {
    const id = params.id;
    const res = await fetch("https://dummyjson.com/products/" + id);

    const data = await res.json();

    setProductDetail(data.prod);
  }, [params.id]);

  useEffect(() => {
    showProductDetails();
  }, [showProductDetails]);

  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h2>Product Details</h2>
      </header>
      <div>
        <ProductDetail prod={productDetail} />
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to={"/products"}>Back to Products' List</Link>
      </div>
    </>
  );
}

export default ProductDetailsPage;
