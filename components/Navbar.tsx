import Link from "next/link";
import { useState, useContext } from "react";
import { AuthContext, authContext } from "../contexts/authContext";

const Navbar: React.FC = (): JSX.Element => {
  const [isRotated, setIsRotated] = useState(false);
  const persons = useContext<authContext>(AuthContext);
  let auth = false;
  let isAdmin = false;
  for (let i = 0; i < persons.persons.length; i++) {
    if (persons.persons[i].auth) {
      auth = true;
      if (persons.persons[i].isAdmin) {
        isAdmin = true;
        break;
      }
      break;
    }
  }

  return (
    <>
      <header>
        <div className="logo">
          <Link href="/">
            <img src="../icon.png" alt="logo" style={logoStyle} />
          </Link>
        </div>
        <nav className="desktop">
          <ul>
            {!auth ? (
              <>
                <li>
                  <Link href="/">
                    <h1>Home</h1>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <h1>About</h1>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/product">
                    <h1>Products</h1>
                  </Link>
                </li>
                <li>
                  <Link href="/cart">
                    <h1>Cart</h1>
                  </Link>
                </li>
                {isAdmin ? (
                  <li>
                    <Link href="/admin">
                      <h1>Admin</h1>
                    </Link>
                  </li>
                ) : null}
                <li>
                  <Link href="/usersprofile">
                    <h1>Edit Profile</h1>
                  </Link>
                </li>
                <li onClick={()=> persons.AuthDispatch({type:"Log_Out"})}>
                  <Link href="/">
                    <h1 title="are you sure?">Log Out</h1>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <nav
          className={isRotated ? "rotate-mobile" : "mobile"}
          onClick={() => setIsRotated(!isRotated)}
        >
          <div className={isRotated ? "line-one-move" : "line-one"}></div>
          <div className={isRotated ? "line-two-move" : "line-two"}></div>
          <div className={isRotated ? "line-three-move" : "line-three"}></div>
        </nav>
      </header>
      <div className={isRotated ? "drop-down active" : "drop-down"}>
        <ul>
          {!auth ? (
            <li>
              <Link href="/">
                <h1>Home</h1>
              </Link>
              <Link href="/about">
                <h1>About</h1>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/">
                  <h1>Products</h1>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <h1>Cart</h1>
                </Link>
              </li>
              <Link href="/adminlogin">
                <h1>Admin</h1>
              </Link>
              <li>
                <Link href="/">
                  <h1 title="are you sure to logout?">Log Out</h1>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

const logoStyle = {
  height: "10vh",
  width: "10vw",
};

export default Navbar;
