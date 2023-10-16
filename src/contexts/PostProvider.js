import { createContext, useState } from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 8 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 2
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = {
    posts: searchedPosts,
    onClearPosts: handleClearPosts,
    onAddPost: handleAddPost,
    searchQuery,
    setSearchQuery,
    createRandomPost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostProvider;
