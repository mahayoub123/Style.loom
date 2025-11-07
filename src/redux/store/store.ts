import testimonialsReducer from "../slices/testimonialsSlice"; // تأكد من وجود هذا
import { configureStore } from "@reduxjs/toolkit";
 import statsReducer from '../../redux/slices/statsSlice.ts'
import faqReducer from "../../redux/slices/faqSlice.ts";
import cardReducer from '../slices/cardSlice';
import productsReducer from '../slices/ProductSlice.ts'
export const store = configureStore({
  reducer: {
    stats: statsReducer,
    products: productsReducer,
    faqs: faqReducer,
    testimonials: testimonialsReducer,
    cards: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch =typeof store.dispatch;

