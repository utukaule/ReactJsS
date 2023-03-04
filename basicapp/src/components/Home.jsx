import React, { useEffect, useState, } from 'react'
import Coin from './Product';
import Loader from './Loader';
import axios from 'axios';

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchAllCoind = async () => {
      try{
        const {data} = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20"
        );
        console.log(data);
        setCoins(data);
        setLoading(false);
      }
      catch(error){
        alert("Link is not working properly");
      }
    };

    fetchAllCoind();
  }, []);

  return (
    <div className='home'>
      {
        loading?(<Loader/>):(coins.map((i) => (
          <Coin 
          name={i.name} 
          symbol={i.image}
          high24h={i.high_24h} 
          low24h = {i.low_24h} 
          currentPrice = {i.current_price} 
          key={i} 
          value={i.id} />
        ))
        )
      }

    </div>
  );
};

export default Home;