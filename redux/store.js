import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expensesSlice";

const store = configureStore({ reducer: expenseSlice.reducer });

export default store;
