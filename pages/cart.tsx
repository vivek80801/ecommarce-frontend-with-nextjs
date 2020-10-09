import Head from "next/head";
import Link from "next/link"
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
      <div
          style={{
            backgroundColor: "var(--mainWhite)",
            position: "sticky",
            zIndex: 3,
            top: "5rem",
          }}
        >
          <Link href="/product">
            <button className="btn btn-fixed">Back</button>
          </Link>
        </div>
        
    </>
  );
};

export default cart;
