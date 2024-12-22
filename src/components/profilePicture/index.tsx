import { Image, SafeAreaView, View } from "react-native";
import  ImageProfile  from "@/assets/image/imageProfile.png"
import { s } from "./style";


export function ProfilePicture() {
  return (
    <View>
      <Image
        source={ImageProfile}
        style={s.image}
      />
    </View>
  )
}
