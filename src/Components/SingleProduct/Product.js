import React from 'react';
import './Product.css';

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, image, price, material, rating } = product;

    return (
        <div className='cart-style'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{material}</p>
            <p>{rating}</p>
            <button onClick={() => handleAddToCart(product)} className='btn btn-primary'>Add to cart</button>
        </div>
    );
};

export default Product;