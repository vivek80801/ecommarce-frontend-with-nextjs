import { createContext, useReducer, useEffect } from "react";
import { ProductAction, productReducer } from "../reducers/productReducer";
import { product } from "../data/products";

export interface productContext {
  products: product[];
  ProductDispatch: React.Dispatch<ProductAction>;
}

const productItems: product[] = [];

export const ProductContext = createContext<any | productContext>(productItems);

export const ProductProvider: React.FC = ({ children }): JSX.Element => {
  const [products, dispatch] = useReducer(productReducer, productItems);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: product[]) =>
        data.map((item) => productItems.push(item))
      )
      .catch((err) => console.log(err));
  }, []);
  return (
    <ProductContext.Provider value={{ products, ProductDispatch: dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
