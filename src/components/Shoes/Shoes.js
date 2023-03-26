import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 25;
    const second = 10;
    const total = multiply(first, second);

    return (
        <div>
            <h2>This is Shoes component</h2>
            <p>Total: {total}</p>
        </div>
    );
};

export default Shoes;