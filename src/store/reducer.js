import { createReducer } from "@reduxjs/toolkit";
import { decrementProduct, fetchingProducts, incrementProduct, productToCart, removeProduct, removeProducts } from "./actions";

const defaultState = {
    products: [],
    cart: [],
    totalPrice: 0,
};

const reducer = createReducer(defaultState, builder => {
    builder
        .addCase(fetchingProducts, (state, action) => {
            state.products = action.payload;
            const products = localStorage.getItem("products");
            const productsTotalPrice = localStorage.getItem("productsTotalPrice");

            if (products) {
                state.cart = JSON.parse(products);
                state.totalPrice = +productsTotalPrice;
            }
        })
        .addCase(productToCart, (state, action) => {
            const findProduct = state.cart.find(f => f.label === action.payload.label);
            if (!findProduct) {
                state.cart.push({
                    img1: action.payload.img1,
                    label: action.payload.label,
                    price: action.payload.price,
                    oldPrice: action.payload.price,
                    quantity: 1,
                });

                state.totalPrice += action.payload.price;
            } else {
                state.totalPrice += action.payload.price;
                findProduct.price += action.payload.price;
                findProduct.quantity++;
            }

            localStorage.setItem("products", JSON.stringify(state.cart));
            localStorage.setItem("productsTotalPrice", state.totalPrice);
        })
        .addCase(incrementProduct, (state, action) => {
            const product = state.cart.find(f => f.label === action.payload.label);
            product.quantity++;
            product.price += action.payload.oldPrice;
            state.totalPrice += action.payload.oldPrice;

            localStorage.setItem("products", JSON.stringify(state.cart));
            localStorage.setItem("productsTotalPrice", state.totalPrice);
        })
        .addCase(decrementProduct, (state, action) => {
            const product = state.cart.find(f => f.label === action.payload.label);
            product.quantity--;
            product.price -= action.payload.oldPrice;
            state.cart = state.cart.filter(f => f.quantity > 0);
            state.totalPrice -= action.payload.oldPrice;

            localStorage.setItem("products", JSON.stringify(state.cart));
            localStorage.setItem("productsTotalPrice", state.totalPrice);
        })
        .addCase(removeProduct, (state, action) => {
            const product = state.cart.find(f => f.label === action.payload.label);
            state.cart = state.cart.filter(f => f.label !== product.label);
            state.totalPrice -= action.payload.price;

            localStorage.setItem("products", JSON.stringify(state.cart));
            localStorage.setItem("productsTotalPrice", state.totalPrice);
        })
        .addCase(removeProducts, (state) => {
            state.cart = [];
            state.totalPrice = 0;

            localStorage.clear();
        })
        .addDefaultCase(() => { });
});

export default reducer;