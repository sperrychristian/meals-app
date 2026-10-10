import { Text } from "react-native";

function MealDetailsScreen({ route }) {
    const mealId = route.params.mealId; 
    return (
        <View>
            <Image />
            <Text></Text>
            <View>

            </View>
            <Text>Ingredients</Text>
            <Text>Steps</Text>
        </View>
    );
}

export default MealDetailsScreen;