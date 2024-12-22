import { Image, Text, View } from "react-native";
import { s } from "./style";
import ImageProfile from "@/assets/image/imageProfile.png"
import { colors, fontFamily } from "@/style/theme";
import { IconCalendar, IconClock } from "@tabler/icons-react-native"
import { Icon } from "../Button";


export default function Barbers() {
    return (
        <View style={s.container}>
            <Image
                source={ImageProfile}
                style={s.image}
            />

            <View style={s.content}>
                <Text style={s.title}>Diego Fernandes</Text>
                <View style={s.details}>

                    <IconCalendar style={s.iconDetails}/>
                    
                    <Text style={{ color: colors.gray.base, fontFamily: fontFamily.regular, fontSize: 12 }}>Segunda à sexta</Text>

                </View>

                <View style={s.details}>

                    <IconClock style={s.iconDetails}/>

                    <Text style={{ color: colors.gray.base, fontFamily: fontFamily.regular, fontSize: 12 }}>08h às 18h</Text>


                </View>
            </View>
        </View>

    )
}