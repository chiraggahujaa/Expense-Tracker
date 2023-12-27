import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import Colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

const Expense = (props) => {
  const { id, name, date, amount } = props;
  const navigation = useNavigation();

  const handleEdit = () => {
    navigation.navigate("EditExpense", {
      id,
      name,
      date: date.toISOString(),
      amount,
    });
  };

  return (
    <Pressable style={styles.container} onPress={handleEdit}>
      <View style={styles.innerContainer}>
        <Text style={[styles.heading, styles.text]}>{name}</Text>
        <Text style={[styles.date, styles.text]}>
          {new Date(date).toLocaleDateString()}
        </Text>
      </View>
      <View style = {styles.amountContainer}>
        <Text style={[styles.amount, styles.text]}>₹{parseFloat(amount)}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 72,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Colors.light800,
    marginBottom: 10,
    elevation: 2,
  },
  innerContainer: {
    // alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
  },
  date: {
    fontSize: 10,
    marginLeft: 2,
  },
  amountContainer: {
    backgroundColor: Colors.light500,
    padding : 6,
    borderRadius : 4
  },
  amount: {
    fontSize: 22,
    fontWeight: "600",
  },
  text: {
    color: "white",
  },
});

export default Expense;
