import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import { AuthContext, authContext } from "../contexts/authContext";
import Link from "next/link";

export interface message {
  msg: string;
  err: boolean;
}

const Home: React.FC = (): JSX.Element => {
  const persons = useContext<authContext>(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState<message[]>([]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setMessages([]);
    }, 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, [messages]);

  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Log In " />
        <meta name="keywords" content="Log In" />
        <title>Log In</title>
        <link rel="icon" href="/favicon.png" type="img/png" />
      </Head>
      <>
        <div className="contain">
          <div className="container">
            {messages.map((message, idx) => (
              <span key={idx}
                style={{
                  color: message.err ? "var(--lightRed)" : "#0f0",
                }}
              >
                {message.msg}
              </span>
            ))}
            <h1>Log In Form</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (password === "" || userName === "") {
                  setMessages([
                    ...messages,
                    { msg: "Please fill the form", err: true },
                  ]);
                } else {
                  for (let i = 0; i < persons.persons.length; i++) {
                    if (persons.persons[i].auth) {
                      setMessages([
                        ...messages,
                        { msg: "You are already Logged in", err: true },
                      ]);
                      setUserName("");
                      setPassword("");
                      return messages;
                    } else if (
                      persons.persons[i].name === userName &&
                      persons.persons[i].password === password
                    ) {
                      setMessages([
                        ...messages,
                        { msg: "You are Logged in", err: false },
                      ]);
                      setUserName("");
                      setPassword("");
                      return persons.AuthDispatch({
                        type: "Log_IN",
                        id: persons.persons[i].id,
                      });
                    } else {
                      setMessages([
                        ...messages,
                        { msg: "Username or Password is wrong", err: true },
                      ]);
                    }
                  }
                }
                setUserName("");
                setPassword("");
              }}
            >
              <label htmlFor="UserName">
                <span>UserName:</span>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  name="username"
                  data-testid="username"
                  autoComplete="current-password"
                  placeholder="Enter Your user name"
                  value={userName}
                />
              </label>
              <br />
              <label htmlFor="Password">
                <span>Password: </span>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  data-testid="password"
                  autoComplete="current-password"
                  placeholder="Enter Your user password"
                  value={password}
                />
              </label>
              <br />
              <input
                type="submit"
                data-testid="submit-btn"
                value="Log In"
                title="log in"
              />
            </form>
            <Link href="/createaccount">
              <button className="btn" onClick={() => console.log("uyuyu")}>
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};
export default Home;
