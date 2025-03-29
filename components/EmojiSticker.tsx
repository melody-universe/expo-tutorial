import { Image, ImageSource } from "expo-image";
import { View } from "react-native";

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}

type Props = { imageSize: number; stickerSource: ImageSource };
