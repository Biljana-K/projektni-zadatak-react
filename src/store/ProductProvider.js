import { useReducer } from "react";
import ProductContext from "./product-context";

const defaultState = {
  items: [],
};

const productReducer = (state, action) => {
  if (action.type === "CREATE_PRODUCT") {
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    };
  }

  return defaultState;
};

const ProductProvider = (props) => {
  const [productState, dispatchProductAction] = useReducer(
    productReducer,
    defaultState
  );

  const addProductHandler = (item) => {
    dispatchProductAction({ type: "CREATE_PRODUCT", item: item });
  };

  const editProductHandler = (id) => {
    dispatchProductAction({ type: "EDIT_PRODUCT", id: id });
  };

  const productContext = {
    items: productState.items,
    addItem: addProductHandler,
    editItem: editProductHandler,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
