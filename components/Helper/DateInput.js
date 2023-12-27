import { Pressable, StyleSheet, Text, View } from "react-native";
import InputContainerCard from "../Styling Component/InputContainerCard";
import InputCard from "../Styling Component/InputCard";
import Colors from "../../utils/colors";

const DateInput = (props) => {
  const { icon, date, heading, showDatepicker } = props;

  return (
    <InputContainerCard>
      <View style={styles.iconContainer}>{icon}</View>
      <Pressable onPress={showDatepicker} style={styles.inputView}>
        <Text style={styles.text}>{new Date(date).toLocaleDateString()}</Text>
      </Pressable>
    </InputContainerCard>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "white",
  },
  inputView: {
    height: 40,
    // borderRadius: 20,
    flex: 1,
    borderBottomWidth: 2,
    borderColor: Colors.offWhite,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  iconContainer: {
    borderWidth: 2,
    padding: 7,
    borderColor: Colors.offWhite,
  },
});

export default DateInput;
