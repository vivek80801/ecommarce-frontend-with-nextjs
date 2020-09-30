import { createContext, useReducer } from "react";
import { AuthActions, authReducer } from "../reducers/authReducer";
import { user, users } from "../data/users";

export interface authContext {
  persons: user[];
  AuthDispatch: React.Dispatch<AuthActions>;
}

export const AuthContext = createContext<any | authContext>(users);

export const AuthProvider: React.FC = ({ children }): JSX.Element => {
  const [persons, dispatch] = useReducer(authReducer, users);
  return (
    <AuthContext.Provider value={{ persons: persons, AuthDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
