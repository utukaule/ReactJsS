import React from 'react';

function Category({ image, label }) {
    return <div className='container'>
        <img src={image} alt="" id='images' />
        <b>{label}</b>
    </div>
}
export default Category;