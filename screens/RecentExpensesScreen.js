import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Expense from "../components/Expense";
import Colors from "../utils/colors";
import { useSelector } from "react-redux";
import TotalExpense from "../components/TotalExpense";

const RecentExpensesScreen = (props) => {
  const expenses = useSelector((state) => state.expenses);

  const filterExpenses = expenses.filter((expense) => {
    const dateDiff = Math.ceil(
      (new Date() - new Date(expense.date)) / (1000 * 60 * 60 * 24)
    );
    console.log(dateDiff);
    return dateDiff <= 7;
  });
  console.log(filterExpenses);

  return (
    <View style={styles.container}>
      {filterExpenses.length === 0 ? (
        <Text style={styles.noExpenseText}>
          No expenses in the last 7 days !!
        </Text>
      ) : (
        <>
          <TotalExpense title="Last 7 days" expenses={filterExpenses} />
          <FlatList
            data={filterExpenses}
            renderItem={({ item }) => (
              <Expense
                id={item.id}
                name={item.title}
                amount={item.amount}
                date={new Date(item.date)}
              />
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark800,
    padding: 20,
  },
  noExpenseText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
    textAlign : "center"
  },
});

export default RecentExpensesScreen;
