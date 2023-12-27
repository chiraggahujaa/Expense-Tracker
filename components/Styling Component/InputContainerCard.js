import { View, StyleSheet } from "react-native";

const InputContainerCard = (props) => {
  const { children } = props;

  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 24,
    marginRight: 10,
  },
});

export default InputContainerCard;
