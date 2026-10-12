import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import CategoriesScreens from "./screens/CategoriesScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#292a2b" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#f2e3e3" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreens}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsOverview" 
          component={MealsOverviewScreen} 
          />
          <Stack.Screen name='MealDetails'
          component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
  },
});
