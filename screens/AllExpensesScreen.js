import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Colors from "../utils/colors";
import Expense from "../components/Expense";
import { useSelector } from "react-redux";
import TotalExpense from "../components/TotalExpense";

const AllExpensesScreen = (props) => {
  const expenses = useSelector((state) => state.expenses);

  return (
    <View style={styles.container}>
      {expenses.length === 0 ? (
        <Text style={styles.noExpenseText}>No expense added yet !!</Text>
      ) : (
        <>
          <TotalExpense title="Total" expenses={expenses} />
          <FlatList
            data={expenses}
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
    textAlign: "center",
  },
});

export default AllExpensesScreen;
