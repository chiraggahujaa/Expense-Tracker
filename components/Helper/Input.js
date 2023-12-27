import { View, StyleSheet, Pressable, TextInput, Text } from "react-native";
import InputContainerCard from "../Styling Component/InputContainerCard";
import InputCard from "../Styling Component/InputCard";
import Colors from "../../utils/colors";

const Input = (props) => {
  const { icon, heading, value, setter, mode } = props;

  return (
    <InputContainerCard>
      <View style={styles.iconContainer}>{icon}</View>
      <InputCard>
        <TextInput
          value={value ? value + "" : ""}
          onChangeText={(text) => setter(text)}
          style={styles.text}
          inputMode={mode}
          placeholder={heading}
          placeholderTextColor={"grey"}
        />
      </InputCard>
    </InputContainerCard>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "white",
  },
  iconContainer: {
    borderWidth: 2,
    padding: 7,
    borderColor: Colors.offWhite,
  },
});

export default Input;
