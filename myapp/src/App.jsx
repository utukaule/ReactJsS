import Header from './components/Header';
import './styles/Header.css'
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import  About  from './components/About';
import Contact from './components/Contact';

function App() {
    return (
    <Router>
            <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<h1>Page not found</h1>}/>
        </Routes>
        
    </Router>
    )
}
export default App;