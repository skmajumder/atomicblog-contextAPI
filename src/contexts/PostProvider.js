import { createContext } from "react";

export const PostContext = createContext();

const PostProvider = ({ children, value }) => {
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostProvider;
