import { useState } from 'react';
import './App.css';
import Category from './components/Category';
import './styles/Category.css';
function App() {
  // const list = [{name:'utu',likes:'circle'},{name:'hrushi',likes:'square'}]
  const navBar = [
    { image: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100", title: "Grocery" },
    { image: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100", title: "Mobiles" }
  ]
  const [counter, setCounter] = useState(0); //this is array distructuring.

  const counterHandler = ((el) => {
    if(counter >=5){
      // alert('reached the max lvl');
      return 
    }
    
    setCounter(counter + el)
  })
  

  return (
    <>
      <div className='nav'>
        {/* {list.map((el)=>{
      return <li className={el.likes} >{el.name}</li>
    })}
  */}
        {/* {navBar.map((el) => {
          return <Category image={el.image} label={el.title} />
        })} */}


      </div>;

      {/* Events */}
      <p>Counter: {counter}</p>
      <button onClick={() => counterHandler(1)}>Add 1</button>
      <button onClick={() => counterHandler(-1)}>Sub 1</button>
      <p>{counter%2==0?'even':'odd'}</p>
    </>
  ) 
}

export default App;
