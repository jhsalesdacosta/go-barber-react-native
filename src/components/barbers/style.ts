import { colors } from "@/style/colors";
import { fontFamily } from "@/style/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: 327,
        height: 112,
        borderRadius: 10,
        backgroundColor: colors.black.soft,
        alignItems: "center",
        justifyContent: "center"

    },

    image: {
        height: 72,
        width: 72,
    },

    content: {
        flex: 1,
        maxWidth: 230,
        height: 90,
    },

    title: {
        fontFamily: fontFamily.medium,
        fontSize: 18,
        color: colors.white.base
    },

    details: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        alignItems:"center"
    },
    iconDetails: {
        color:colors.orange.base
    }



})