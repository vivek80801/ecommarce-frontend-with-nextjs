import Head from "next/head";
import ProductList from "../components/ProductList";


const Product: React.FC = (): JSX.Element => {
  return (
    <div>
      <>
        <Head>
          <title>products</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
      </>
      <>
        <h1 style={{ textTransform: "capitalize" }}>welcome</h1>
        <h2>
          Our <strong>Products</strong>
        </h2>
        <div className="products">
          <ProductList />
        </div>
      </>
    </div>
  );
};
export default Product;
