import { Image, Text, TextProps, TouchableOpacity, View } from "react-native";
import { s } from "./style";
import ImageProfile from "@/assets/image/imageProfile.png"
import { colors, fontFamily } from "@/style/theme";
import { IconCalendar, IconClock } from "@tabler/icons-react-native"
import { Icon } from "../Button";
import { router } from "expo-router";



export default function Barbers({children}: TextProps) {
    return (
        <TouchableOpacity onPress={() => router.navigate("/scheduled")}>
            <View style={s.container}>
                <Image
                    source={ImageProfile}
                    style={s.image}
                />

                <View style={s.content}>
                    <Text style={s.title}>{children}</Text>
                    <View style={s.details}>

                        <IconCalendar color={s.iconDetails.color} />

                        <Text style={{ color: colors.gray.base, fontFamily: fontFamily.regular, fontSize: 12 }}>Segunda à sexta</Text>

                    </View>

                    <View style={s.details}>

                        <IconClock color={s.iconDetails.color} />

                        <Text style={{ color: colors.gray.base, fontFamily: fontFamily.regular, fontSize: 12 }}>08h às 18h</Text>


                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}