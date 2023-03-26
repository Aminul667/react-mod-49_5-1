import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) => {
        console.log('item added', id);
    };

    const addToCartWithParam = () => addToCart(id);

    return (
        <div className='product'>
            <h2>Buy This: {name}</h2>
            <p>Only for ${price}</p>
            <button onClick={addToCartWithParam}>Add to cart</button>
            <button onClick={() => addToCart(id)}>Add to cart with ID</button>
        </div>
    );
};

export default Cosmetic;