import { createAction } from "@reduxjs/toolkit";

export const fetchingProducts = createAction("FETCHING_PRODUCTS");
export const productToCart = createAction("PRODUCT_TOCART");
export const incrementProduct = createAction("INCREMENT_PRODUCT");
export const decrementProduct = createAction("DECREMENT_PRODUCT");
export const removeProduct = createAction("REMOVE_PRODUCT");
export const removeProducts = createAction("REMOVE_PRODUCTS");