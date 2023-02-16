import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems'

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        toggle: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            if (payload.type === 'increase') {
                cartItem.amount = cartItem.amount + 1;
            }
            if (payload.type === 'decrease') {
                cartItem.amount = cartItem.amount - 1;
            }
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== itemId)
        },
    }
});

export const { clearCart, removeItem, toggle, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
