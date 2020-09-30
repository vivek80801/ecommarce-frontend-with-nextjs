import "../styles/globals.css";
import { AuthProvider } from "../contexts/authContext";
import { ProductProvider } from "../contexts/productContext";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProductProvider>
        <AuthProvider>
          <Navbar />
          <Component {...pageProps} />
        </AuthProvider>
      </ProductProvider>
    </>
  );
}

export default MyApp;
