import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import climateImage from "../assets/images/climate.png";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import climate from "../assets/images/climate.png";
const Climate = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={climate} resizeMode="cover" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818"
  },
  image: {
    width: "100%",
    height: "65%"
  }
});
export default Climate;
