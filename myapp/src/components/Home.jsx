import React from 'react'
import Product from './Products';

const Home = () => {
    const arr = [1, 2, 43, 5];
    return (
        <div>
            {arr.map((i) => (
                <Product value={i} key={i} />
            ))}
        </div>
    )
}

export default Home