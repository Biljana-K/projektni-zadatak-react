import React from "react";

const ProductContext = React.createContext({
  items: [],
  addItem: (item) => {},
  editItem: (id) => {},
  deleteItem: (id) => {},
});

export default ProductContext;
