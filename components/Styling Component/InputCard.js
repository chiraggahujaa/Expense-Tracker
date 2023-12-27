import { View, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const InputCard = (props) => {
  const { children } = props;

  return <View style={styles.inputView}>{children}</View>;
};

const styles = StyleSheet.create({
  inputView: {
    height: 40,
    // borderRadius: 6,
    flex: 1,
    borderBottomWidth : 2,
    borderColor: Colors.offWhite,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});

export default InputCard;
