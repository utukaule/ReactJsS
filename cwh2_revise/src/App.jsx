import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import { TextForm } from './components/TextForm';

function App() {
  const [theme, setTtheme] = useState('dark');
  const toggle = () =>{
    if(theme === 'dark'){
      setTtheme('light');
      document.body.style.backgroundColor = 'white';
    }
    else{
      setTtheme('dark');
      document.body.style.backgroundColor = 'lightgray';
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message,result) => {
    setAlert({
      msg:message,
      result: result
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
    
  }


  return (
    <>
      <NavBar title="TextUtils" toggle = {toggle}/>
      <Alert alert={alert} />
      <TextForm showAlert ={showAlert} heading="Enter text and modify"/>
      {/* <About/> */}
    </>
  );
}

export default App;
