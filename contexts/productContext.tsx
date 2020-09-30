import { createContext, useReducer } from "react";
import { ProductAction, productReducer } from "../reducers/productReducer";
import { product, productItems } from "../data/products";

export interface productContext {
  products: product[];
  ProductDispatch: React.Dispatch<ProductAction>;
}

export const ProductContext = createContext<any | productContext>(productItems);

export const ProductProvider: React.FC = ({ children }): JSX.Element => {
  const [products, dispatch] = useReducer(productReducer, productItems);
  return (
    <ProductContext.Provider
      value={{ products, ProductDispatch: dispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};
