
import './App.css';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import Pegination from './components/Pegination';

function App() {
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
