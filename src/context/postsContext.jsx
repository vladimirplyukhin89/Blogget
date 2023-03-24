import { createContext } from "react";
import PropTypes from "prop-types";

import { usePosts } from "../hooks";

export const postContext = createContext([]);

export const PostsContextProvider = ({ children }) => {
  const [bestPosts, bestPostsError] = usePosts();

  return (
    <postContext.Provider value={{ bestPosts, bestPostsError }}>
      {children}
    </postContext.Provider>
  );
};

PostsContextProvider.propsTypes = {
  children: PropTypes.node.isRequired
};
