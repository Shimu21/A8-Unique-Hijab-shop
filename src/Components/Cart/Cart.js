import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    return (
        <div>
            <h2>{props.cart.name}</h2>
        </div>
    );
};

export default Cart;