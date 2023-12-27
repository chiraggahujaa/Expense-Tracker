import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Alert,
} from "react-native";
import Colors from "../utils/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateInput from "./Helper/DateInput";
import Input from "./Helper/Input";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { expenseActions } from "../redux/expensesSlice";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const AddExpense = (props) => {
  const {
    id,
    edit,
    title: initialTitle,
    date: initialDate,
    amount: initialAmount,
  } = props;

  const [title, setTitle] = useState(initialTitle ? initialTitle : "");
  const [date, setDate] = useState(
    initialDate ? new Date(initialDate) : new Date()
  );
  const [amount, setAmount] = useState(
    initialAmount ? initialAmount : undefined
  );

  const [show, setShow] = useState(false);

  const reducer = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
    // validate input
    const titleValid = title.trim().length > 0;
    const amountIsValid = !isNaN(parseInt(amount)) && amount > 0;
    const dateIsValid = date.toString() !== "Invalid Date";

    if(!titleValid || !amountIsValid || !dateIsValid){
      if (!titleValid) Alert.alert("Invalid Title!");
      else if (!amountIsValid) Alert.alert("Invalid amount!");
      else if (!dateIsValid) Alert.alert("Invalid date!");

      return;
    }
    

    if (!edit) {
      // to add expense
      reducer(
        expenseActions.addExpense({
          expense: { title, amount, date: date.toISOString() },
        })
      );
      setTitle("");
      setAmount();
      setDate(new Date());
    } else {
      // to edit expense
      reducer(
        expenseActions.editExpense({
          expense: { title, id, amount, date: date.toISOString() },
        })
      );
    }
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Input
            heading="Title"
            value={title}
            setter={setTitle}
            mode="text"
            icon={<MaterialIcons name="description" size={24} color="white" />}
          />
          <Input
            heading="Amount"
            value={amount}
            setter={setAmount}
            mode="numeric"
            icon={
              <MaterialCommunityIcons
                name="cash-multiple"
                size={24}
                color="white"
              />
            }
          />
          <DateInput
            heading="Date"
            date={date}
            setter={setAmount}
            showDatepicker={showDatepicker}
            icon={<Ionicons name="calendar" size={24} color="white" />}
          />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              onChange={onChange}
            />
          )}
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Submit" onPress={handleSubmit} color={"#00135e"} />
            </View>
            <View style={styles.button}>
              <Pressable style={styles.cancelButton} onPress={handleCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
              {/* <Button title="Cancel" onPress={handleCancel} /> */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -80, // center for human eye
    flex: 1,
    // margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    backgroundColor: Colors.dark500,
    width: "85%",
    // height: "80%",
    borderRadius: 6,
    paddingVertical: 30,
    paddingHorizontal: 24,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
  cancelButton: {
    borderWidth: 1, // Set border width for the outline
    borderColor: "grey", // Set the border color
    padding: 6,
    borderRadius: 2, // Set border radius for rounded corners
    alignItems: "center",
  },
  buttonText: {
    color: "grey", // Set the text color
    fontSize: 16,
  },
});

export default AddExpense;
