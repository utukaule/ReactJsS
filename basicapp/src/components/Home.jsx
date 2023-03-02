import React, { useEffect, useState, } from 'react'
import Coin from './Product';
import axios from 'axios';

const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {

    const fetchAllCoind = async () => {
      const {data} = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20"
      );
      console.log(data);
      setCoins(data);
    };

    fetchAllCoind();
  }, []);

  return (
    <div>

      <h1>Home page...</h1>
      {coins.map((i) => (
        <Coin name={i.name} symbol={i.image} high24h={i.high_24h} low24h = {i.low_24h} currentPrice = {i.current_price} key={i} value={i.id} />
      ))}

    </div>
  );
};

export default Home;