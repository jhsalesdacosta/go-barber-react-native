import { Image, View, ImageProps } from "react-native";
import  ImageProfile  from "@/assets/image/imageProfile.png"
import { s } from "./style";


type Props = ImageProps &{



}


export function ProfilePicture({...rest}: Props) {
  return (
    <View>
      <Image
        source={ImageProfile}
        style={[s.image, rest.style]}
        {...rest}
      />
    </View>
  )
}
