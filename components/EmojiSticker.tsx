import { ImageSource } from "expo-image";
import Animated from "react-native-reanimated";
import { View } from "react-native";

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Animated.Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}

type Props = { imageSize: number; stickerSource: ImageSource };
