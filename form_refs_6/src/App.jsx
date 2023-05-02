import './App.css';
import From from './components/From';

function App() {
  const handleCheck = (e) =>{
    console.log({e});
  }
  return (
    <>
    <From/>
    </>
  );
}

export default App;
