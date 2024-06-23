import { useRef } from "react";

import classes from "./ProductForm.module.css";

function ProductForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const brandInputRef = useRef();
  const priceInputRef = useRef();
  const categoryInputRef = useRef();
  const stockInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const productData = {
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      brand: brandInputRef.current.value,
      price: priceInputRef.current.value,
      category: categoryInputRef.current.value,
      stock: stockInputRef.current.value,
    };

    props.onSubmitProduct(productData);
  };

  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes["form-elements"]}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className={classes["form-elements"]}>
          <label htmlFor="description">Description</label>
          <textarea
            rows="2"
            id="description"
            required
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={classes["form-elements"]}>
          <label htmlFor="brand">Brand</label>
          <input type="text" id="brand" required ref={brandInputRef} />
        </div>
        <div className={classes["form-elements"]}>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" required ref={priceInputRef} />
        </div>
        <div className={classes["form-elements"]}>
          <label htmlFor="category">Category</label>
          <input type="text" id="category" required ref={categoryInputRef} />
        </div>

        <div className={classes["form-elements"]}>
          <label htmlFor="stock">Stock</label>
          <input type="text" id="stock" required ref={stockInputRef} />
        </div>
        <div className={classes.actions}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default ProductForm;
