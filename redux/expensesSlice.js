import { createSlice } from "@reduxjs/toolkit";

const initialState = {expenses : [
  {title : "Book", amount : 100, date : new Date().toISOString(), id : Math.random()}
]};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers : {
    addExpense(state, action){
        state.expenses.push({id : Math.random(), ...action.payload.expense});
    },
    removeExpense(state, action){
      const {id} = action.payload;
      state.expenses = state.expenses.filter(expense => expense.id != id);
    },
    findExpense(state, action){
      const {id} = action.payload;

      
    },
    editExpense(state, action) {
      const { id, ...remainingExpense } = action.payload.expense;

      state.expenses = state.expenses.filter((expense) => expense.id != id);
      state.expenses.push({ id, ...remainingExpense });
    }
  }
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice;