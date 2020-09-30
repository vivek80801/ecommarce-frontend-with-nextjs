import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ProductContext, productContext } from "../../contexts/productContext";

const Details: React.FC = (): JSX.Element => {
  const products = useContext<productContext>(ProductContext);
  const router = useRouter();
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content={
            typeof router.query.details === "string"
              ? router.query.details
              : "Details"
          }
        />
        <meta
          name="keywords"
          content={
            typeof router.query.details === "string"
              ? router.query.details
              : "Details"
          }
        />
        <title>
          {typeof router.query.details === "string"
            ? router.query.details
            : "Details"}
        </title>
        <link rel="icon" href="/favicon.png" type="img/png" />
      </Head>
      <>
        {products.products.map((product) =>
          router.query.details === product.slug ? (
            <div key={product.id}>
              <div className="hero-image">
                <img src={product.img} alt="hero" />
                <p title="this is dummy data">{product.des}</p>
              </div>
              <div className="contain">
                <Link href="/cart">
                  <button
                    onClick={() =>
                      products.ProductDispatch({
                        type: "ADD_TO_CART",
                        id: product.id,
                      })
                    }
                    className="btn"
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          ) : null
        )}
      </>
    </>
  );
};

export default Details;
