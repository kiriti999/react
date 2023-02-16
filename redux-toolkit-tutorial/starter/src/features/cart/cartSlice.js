import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true
};

export const getCartItems = createAsyncThunk(
    'cart/getCartItems',
    async (name, thunkAPI) => {
        try {
            // console.log(name);
            console.log('thunkAPI', thunkAPI);
            console.log('state', thunkAPI.getState());
            // thunkAPI.dispatch(openModal());
            const resp = await axios(url);

            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                // console.log(action);
                state.isLoading = false;
                state.cartItems = action.payload;
            })
            .addCase(getCartItems.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
            });
    },
});

export const { clearCart, removeItem, toggle, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
