import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../SingleProduct/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    // console.log(products);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (pd) => {
        const selected = [...carts, pd];
        setCarts(selected);
    }

    const handleDelete = () => {
        setCarts([]);
    }
    const handleSelect = () => {
        for (let i = 0; i < carts.length; i++) {
            const selectOne = [carts[Math.floor(Math.random() * carts.length)]];
            setCarts(selectOne);
        }

    }

    return (
        <div className='shop-container'>

            <div className='cart-container'>
                {
                    products.map(product => <Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>)
                }
            </div>

            <div className='shopping-cart'>
                <Cart handleSelect={handleSelect} handleDelete={handleDelete} carts={carts}></Cart>
            </div>
        </div>
    );
};


export default Shop;