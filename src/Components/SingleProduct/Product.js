import React from 'react';
import './Product.css';
import { FaShoppingCart } from 'react-icons/fa';


const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, image, price, material } = product;

    return (
        <div className='cart-style shadow'>
            <img src={image} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p>Material: {material}</p>
            <button onClick={() => handleAddToCart(product)} className='btn btn-primary'> <FaShoppingCart /> Add to cart</button>
        </div>
    );
};

export default Product;