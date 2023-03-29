import { StyleSheet, Text, View, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import menuOptions from "../assets/menuOptions";
import { Image } from "react-native";
import car from "../assets/images/car.png";
import MenuOption from "../components/menuOption";
import Controls from "../components/controls";
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Model S</Text>
          <Text style={styles.subtitle}>Parking.</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>
      {/* image */}

      <Image source={car} style={styles.image} resizeMode="contain" />

      {/*controls  */}
      {/* <Controls /> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={menuOptions}
        renderItem={MenuOption}
        ListHeaderComponent={Controls}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818"
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 24,
    color: "#eee",
    fontWeight: "bold",
    marginBottom: 8
  },
  subtitle: {
    color: "gray",
    fontWeight: "500"
  },
  image: {
    width: "100%",
    height: 300
  }
});
