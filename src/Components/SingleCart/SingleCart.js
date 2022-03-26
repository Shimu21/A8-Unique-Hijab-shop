import React from 'react';

const SingleCart = (props) => {
    const { name } = props.cart;
    return (
        <div>
            <h4>{name}</h4>
        </div>
    );
};

export default SingleCart;