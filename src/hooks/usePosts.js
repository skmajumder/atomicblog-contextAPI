import { useContext } from "react";
import { PostContext } from "../contexts/PostProvider";

const usePosts = () => {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
};

export default usePosts;
