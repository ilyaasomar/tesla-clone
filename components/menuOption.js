import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
const MenuOption = ({ item }) => {
  return (
    <Link href={item.href} asChild>
      <Pressable style={styles.optionRow}>
        {/* icon */}
        <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
        {/* text */}
        <Text style={styles.optionText}>{item.name}</Text>
        {/* icon */}
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={{ marginLeft: "auto" }}
        />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  optionRow: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  optionText: {
    color: "#eee",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 18
  }
});
export default MenuOption;
