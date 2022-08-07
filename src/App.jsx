import React, { useState, useEffect } from "react";
import NavTop from "./components/NavTop";
import Posts from "./components/Content";
import Pagination from "./components/Pagination";
import API from "./services/API";
// import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      
      setLoading(true);
      
      const res = await API.get();

      let RES_DATA = res.data.pokemon_entries
      if(RES_DATA.length > 0){
        setPosts(RES_DATA);
      }
      
      setLoading(false);
    };
    
    fetchPosts();
  }, []);
  console.log('posts => ', posts)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container mx-auto w-4/5">
      <NavTop />

      <Posts posts={currentPosts} loading={loading} />

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;