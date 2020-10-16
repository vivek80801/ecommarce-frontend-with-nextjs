import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { AuthContext, authContext } from "../contexts/authContext";

const CreateAccount: React.FC = (): JSX.Element => {
  const persons = useContext<authContext>(AuthContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Head>
        <title>Create Account</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="contain">
        <div className="container">
          <h1>Create Account</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              let validUser = false;
              userName === "" || email === "" || password === ""
                ? setMessage("Please fill form")
                : userName.length < 3
                ? setMessage("User name is too short")
                : userName.length > 20
                ? setMessage("User name is too long")
                : password.length < 8
                ? setMessage("Password is too small")
                : userName.length > 20
                ? setMessage("Password is too long")
                : !validUser
                ? persons.persons.map((user) => {
                    !validUser
                      ? user
                      : user.name === userName
                      ? setMessage("User already registred")
                      : user.email === email
                      ? setMessage("Email is already registred")
                      : (validUser = true);
                  })
                : persons.AuthDispatch({
                    type: "Create_Account",
                    email: email,
                    password: password,
                    userName: userName,
                  });
            }}
          >
            <label htmlFor="UserName">
              UserName:
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="username"
                autoComplete="current-password"
                placeholder="Enter Your user name"
              />
            </label>
            <br />
            <label htmlFor="Email">
              Email:
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="username"
                autoComplete="current-password"
                placeholder="Enter Your email address"
              />
            </label>
            <br />
            <label htmlFor="Password">
              Password:
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Enter Your user password"
              />
            </label>
            <br />
            {/* {value.renderRedirect()} */}
            <input type="submit" value="Sign Up" />
          </form>
          <span
            style={{
              color: "var(--lightRed)",
            }}
          >
            {message}
          </span>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
