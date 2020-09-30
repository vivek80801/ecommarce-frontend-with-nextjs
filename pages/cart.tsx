import Head from "next/head";
import { useContext } from "react";
import { ProductContext, productContext } from "../contexts/productContext";

const cart: React.FC = (): JSX.Element => {
  const products = useContext<productContext>(ProductContext);
  
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="img/png" />
        <title>Cart</title>
      </Head>
      {products.products.map((product) =>
        product.inCart ? <>{product.name}</> : null
      )}
    </>
  );
};

export default cart;
