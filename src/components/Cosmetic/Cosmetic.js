import React from 'react';

const Cosmetic = (props) => {
    const {name, price} = props.cosmetic;
    return (
        <div>
            <h2>Buy This: {name}</h2>
            <p>Only for ${price}</p>
        </div>
    );
};

export default Cosmetic;