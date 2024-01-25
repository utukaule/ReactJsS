
import { useContext, useEffect } from 'react';
import './App.css';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import Pegination from './components/Pegination';
import { AppContext } from './context/AppContext';

function App() {
  const {fetchBlogPost} = useContext(AppContext);
  useEffect(()=>{
    const data = fetchBlogPost();
    console.lot(data);
  },[])
  return (
    <>
      <div>
        <Navbar/>
        <Blogs/>
        <Pegination/>
      </div>
    </>
  );
}

export default App;
