import { View, Text, StyleSheet, TextInput } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import InputCard from "./Input";

const Input = (props) => {
  const { children, dropdown, date, showDatepicker, inputMode, value, setter } = props;
  const [selectedItem, setSelectedItem] = useState("₹");

  console.log(date);

  const data = [
    { key: "1", value: "₹" },
    { key: "2", value: "$" },
    { key: "3", value: "€" },
    { key: "4", value: "£" },
    { key: "5", value: "¥" },
  ];

  return (
    <InputCard pressable={date} showDatepicker={showDatepicker}>
      <Text style={styles.text}>{children}</Text>
      <View style={styles.inputView}>
        {date ? (
          <Text style={styles.input}>{new Date(date).toLocaleDateString()}</Text>
        ) : (
          <TextInput style={styles.input} inputMode={inputMode ? inputMode : "text"} value={value} onChangeText={text => setter(text)}/>
        )}
      </View>
      {dropdown && (
        <SelectList
          setSelected={(val) => setSelectedItem(val)}
          data={data}
          save="value"
          placeholder="₹"
          maxHeight={150}
          search={false}
          boxStyles={styles.boxStyles}
          dropdownStyles={styles.dropdownStyles}
          dropdownItemStyles={styles.dropdownItemStyles}
          dropdownTextStyles={styles.dropdownTextStyles}
          inputStyles={styles.inputStyles}
          arrowicon={() => {}}
        />
      )}
    </InputCard>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "white",
    marginRight: 10,
  },
  inputView: {
    height: 40,
    borderRadius: 20,
    flex: 1,
    borderWidth: 1.5,
    borderColor: "black",
    paddingHorizontal: 20,
    justifyContent: "center",
    marginRight: 10,
  },
  input: {
    color: "white",
  },

  // dropdown style
  boxStyles: {
    borderColor: "black",
    borderWidth: 1.5,
    width: 50,
  },
  inputStyles: {
    fontSize: 14,
    fontWeight: "600",
  },
  dropdownItemStyles: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  dropdownStyles: {
    borderColor: "black",
    borderWidth: 1.5,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownTextStyles: {
    fontSize: 14,
    fontWeight: "600",
  },
});
export default Input;
