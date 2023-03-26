import React from 'react';
import { add } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        {id:1, name:'Item 1', price:100},
        {id:2, name:'Item 2', price:200},
        {id:3, name:'Item 3', price:300},
        {id:4, name:'Item 4', price:400},
        {id:5, name:'Item 5', price:500}
    ]
    return (
        <div>
            <h1>Welcome to the Store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    cosmetic={cosmetic} 
                    key={cosmetic.id}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;