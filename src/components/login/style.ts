import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/style/theme"


export const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 200,

    },

    icon: {
        marginTop: 150
    },


    title: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        fontFamily: fontFamily.medium,
        color: colors.white.base,
        marginTop: 60,
        marginBottom: 15
    },

})

