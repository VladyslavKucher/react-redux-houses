import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './saleRent/saleRentSlice'
import priceReducer from './price/priceSlice';
import bedBathReducer from './bedBath/bedbathSlice';
import typeReducer from './type/typeSlice';
import pageReducer from './page/pageSlice';

export const store = configureStore({
  reducer: {
    saleRent: filterReducer,
    type: typeReducer,
    price: priceReducer,
    bedBath: bedBathReducer,
    page: pageReducer,
  },
  devtools: true,
});
