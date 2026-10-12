import { View, FlatList, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  console.log(catId, displayedMeals.length);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
        title: item.title,
        affordability: item.affordability,
        complexity: item.complexity,
        duration: item.duration,
        imageUrl: item.imageUrl
    }

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});