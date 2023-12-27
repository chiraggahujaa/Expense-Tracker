import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddExpense from '../components/AddExpense';

const EditExpenseScreen = props => {
  const {route} = props;
  const { id, name, date, amount } = route.params;

  return (
    <AddExpense id = {id} title = {name} date = {date} amount = {amount} edit = {true}/>
  );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems: "center"
    }
});

export default EditExpenseScreen;