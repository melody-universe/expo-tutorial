import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text } from "react-native";

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.iconButton}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

const styles = StyleSheet.create({
  iconButton: { justifyContent: "center", alignItems: "center" },
  iconButtonLabel: { color: "#fff", marginTop: 12 },
});
