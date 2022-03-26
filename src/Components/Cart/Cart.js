import React from 'react';
import SingleCart from '../SingleCart/SingleCart';
import './Cart.css';

const Cart = (props) => {
    const { carts, handleDelete, handleSelect } = props;
    return (
        <div className='main-cart shadow'>
            <h2>product summary</h2>
            <hr />
            {
                carts.map(cart => <SingleCart key={cart.id} cart={cart}></SingleCart>)
            }
            <button onClick={handleDelete} className='btn btn-primary my-3'>Delete All</button>
            <br />
            <button onClick={handleSelect} className='btn btn-primary'>Select One</button>
        </div>
    );
};

export default Cart;