import { createContext } from "react";
import PropTypes from "prop-types";

import { useAuth } from "../hooks";

export const authContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [auth, authError, clearAuth] = useAuth();

  return (
    <authContext.Provider value={{ auth, authError, clearAuth }}>
      {children}
    </authContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
