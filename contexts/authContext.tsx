import { createContext, useReducer, useEffect } from "react";
import { AuthActions, authReducer } from "../reducers/authReducer";
import { user } from "../data/users";

export interface authContext {
  persons: user[];
  AuthDispatch: React.Dispatch<AuthActions>;
}

const users: user[] = [];

export const AuthContext = createContext<any | authContext>(users);

export const AuthProvider: React.FC = ({ children }): JSX.Element => {
  const [persons, dispatch] = useReducer(authReducer, users);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data: user[]) => data.map((person) => users.push(person)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <AuthContext.Provider value={{ persons: persons, AuthDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
