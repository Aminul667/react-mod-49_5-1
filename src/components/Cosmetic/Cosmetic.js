import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id);
    };

    const addToCartWithParam = () => addToCart(id);

    const removeFromCart = id => {
        removeFromDb(id);
    }

    return (
        <div className='product'>
            <h2>Buy This: {name}</h2>
            <p>Only for ${price}</p>
            <button onClick={addToCartWithParam}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;