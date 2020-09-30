import { useContext } from "react";
import Link from "next/link";
import { ProductContext, productContext } from "../contexts/productContext";

const ProductList: React.FC = (): JSX.Element => {
  const persons = useContext<productContext>(ProductContext);
  return (
    <>
      {persons.products.map((i) => (
        <div className="product" key={i.id}>
          <>
            <Link href={`/details/${i.slug}`}>
              <img src={i.img} alt="product" />
            </Link>
            <div className="product-style">
              <h1>{i.name}</h1>
              <span>Price: ${i.price}</span>
            </div>
          </>
        </div>
      ))}
    </>
  );
};

export default ProductList;
