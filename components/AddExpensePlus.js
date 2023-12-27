import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native"

const AddExpensePlus = (props) => {
  const navigation = useNavigation();
  const handlePlus = _ => {
    navigation.navigate("AddExpense");
  }
  
  return (
    <View style={styles.plus}>
      <Pressable onPress={handlePlus}>
        <FontAwesome name="plus" size={22} color="white" />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  plus: {
    marginRight: 20,
  },
});

export default AddExpensePlus;
