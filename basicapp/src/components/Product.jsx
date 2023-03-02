import React from 'react'

const Coin = ({ name, symbol,currentPrice,high24h,low24h}) => {
    return (
        <div>
            <div className='coin'>
                <img src={symbol} alt="" />
                <h3>{name}</h3>
                <p>Current Price: {currentPrice}</p>
                <p>high_24h: {high24h}</p>
                <p>low_24h: {low24h}</p>
            
            </div>
        </div>
    );
};

export default Coin;