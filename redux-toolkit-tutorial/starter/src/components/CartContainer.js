import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
    const dispatch = useDispatch();
    const { amount, total, cartItems } = useSelector((store) => store.cart);

    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.forEach((item) => {
                    if (!item.amount <= 0) {
                        return <CartItem key={item.id} {...item}>{item.name}</CartItem>
                    }
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>total <span>${total.toFixed(2)}</span></h4>
                </div>
                <button className="btn clear-btn" onClick={() => dispatch(openModal())}>Clear</button>
            </footer>
        </section>
    )
}

export default CartContainer