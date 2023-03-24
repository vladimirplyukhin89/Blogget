import { createContext } from "react";
import PropTypes from "prop-types";

import { useToken } from "../hooks";

export const tokenContext = createContext({});

export const TokenContextProvider = ({ children }) => {
  const [token, delToken] = useToken();

  return (
    <tokenContext.Provider value={{ token, delToken }}>
      {children}
    </tokenContext.Provider>
  );
};

TokenContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
