import { Fragment } from "react";

import ProductItem from "./ProductItem";
import classes from "./ProductsList.module.css";

function ProductsList({ products }) {
  return (
    <Fragment>
      <table className={classes.list}>
        <thead>
          <tr style={{ backgroundColor: "white" }}>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              brand={product.brand}
              price={product.price}
              category={product.category}
              stock={product.stock}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ProductsList;
