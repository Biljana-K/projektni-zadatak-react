import ProductForm from "../components/products/ProductForm";

function AddProductPage() {
  async function addProductHandler(productData) {
    const res = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h2>Add new product</h2>
      </header>
      <ProductForm onSubmitProduct={addProductHandler} />
    </>
  );
}

export default AddProductPage;
