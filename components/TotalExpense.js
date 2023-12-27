import { Text, View, StyleSheet } from "react-native";
import Colors from "../utils/colors";

const TotalExpense = (props) => {
  const { title, expenses } = props;
  const total = expenses.reduce(
    (tot, expense) => tot + parseFloat(expense.amount),
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom : 10,
    backgroundColor : Colors.light500,
    borderRadius : 10,
    paddingVertical : 10,
    paddingHorizontal : 20
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight : "600"
  },
});

export default TotalExpense;
