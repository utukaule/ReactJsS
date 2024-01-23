import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext()

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalpages] = useState(null);
    //Data filling is pending
  async function fetchBlogPost(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalpages(data.totalPages);
    } catch (err) {
      console.log("error in fetching data");
      setPage(1);
      setPosts([]);
      setTotalpages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page){
    setPage(page);
    fetchBlogPost(page)
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalpages,
    fetchBlogPost,
    handlePageChange
  };
    return <AppContext.Provider value = {value}>{children}</AppContext.Provider>
}