import { Image, ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

type Props = { imgSource: ImageSource };

const styles = StyleSheet.create({
  image: { width: 320, height: 440, borderRadius: 18 },
});
