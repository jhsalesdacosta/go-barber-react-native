import { View } from "react-native"
import { Login } from "@/components/login"
import { colors } from "@/style/theme"



export default function Index() {
    return (
        <View style={{ flex: 1, backgroundColor: colors.black.base }}>
            <Login />

        </View>
    )
}