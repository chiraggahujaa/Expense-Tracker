import { StyleSheet, Text, View, StatusBar } from "react-native";

// navigate
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import EditExpenseScreen from "./screens/EditExpenseScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import AddExpensePlus from "./components/AddExpensePlus";
import Colors from "./utils/colors";
import AddExpenseScreen from "./screens/AddExpenseScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigateScreen = (_) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.light500,
        tabBarInActiveTintColor: Colors.light200,
        tabBarStyle: {
          borderTopWidth: 0, // Remove the line above the tab icons
          marginBottom: 20,
          marginHorizontal: 25,
          backgroundColor: "transparent",
        },

        // header styles
        headerStyle: {
          backgroundColor: Colors.dark800,
        },
        headerTintColor: "white",
        headerRight: () => <AddExpensePlus />,
        headerShadowVisible: false,
      })}
    >
      <Tab.Screen
        name="RecentExpense"
        component={RecentExpensesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="timer-sand-full"
              size={24}
              color={color}
            />
          ),
          tabBarItemStyle: {
            borderRadius: 20,
            marginHorizontal: 5,
            backgroundColor: Colors.dark500,
          },
        }}
      />
      <Tab.Screen
        name="AllExpense"
        component={AllExpensesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5 name="calendar-week" size={24} color={color} />
          ),
          tabBarItemStyle: {
            borderRadius: 20,
            marginHorizontal: 5,
            backgroundColor: Colors.dark500,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            navigationBarColor: Colors.dark800,
            contentStyle: { backgroundColor: Colors.dark800 },
            headerStyle: {
              backgroundColor: Colors.dark800,
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Home"
            component={TabNavigateScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="EditExpense" component={EditExpenseScreen} />
          <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar animated={true} backgroundColor={Colors.dark800} />
    </Provider>
  );
}
