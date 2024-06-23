import ProductForm from "../components/products/ProductForm";

function EditProductPage() {
  async function editProductHandler(productData) {
    const res = await fetch("https://dummyjson.com/products/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h2>Edit product details</h2>
      </header>
      <ProductForm onSubmitProduct={editProductHandler} />
    </>
  );
}

export default EditProductPage;
