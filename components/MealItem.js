import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem({ id, imageUrl, title, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
         navigation.navigate('MealDetails', {
        mealId: id,
    })

    }

   
  return (
    <View style={styles.mealItem}>
      <Pressable
      style={({pressed})=> pressed ? styles.buttonPressed : null} 
            android_ripple={{color: '#ccc'}}
            onPress={selectMealItemHandler}>
        <View style = {styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails 
          duration={duration}
          complexity={complexity}
          affordability={affordability}/>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
  },
  
  innerContainer: {
    borderRadius: 8,
    overflow: 11,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
