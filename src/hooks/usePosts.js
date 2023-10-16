import { useContext } from "react";
import { PostContext } from "../contexts/PostProvider";

const usePosts = () => {
  const context = useContext(PostContext);
  return context;
};

export default usePosts;
