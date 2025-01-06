import { colors } from "@/style/colors";
import { fontFamily } from "@/style/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({

    container:{
        flex:1

    },

    content:{
        width:55,
        height:40,
        borderRadius:8,
        backgroundColor:colors.black.soft,
        alignItems:"center",
        justifyContent:"center"
    },
    pressed: {
        opacity: 0.8,
    },
    contentSelected:{
        width:55,
        height:40,
        borderRadius:8,
        backgroundColor:colors.orange.base
    },
    text:{
        fontSize:14,
        fontFamily:fontFamily.medium,
        color:colors.white.base
    },
    textSelected:{
        fontSize:14,
        fontFamily:fontFamily.medium,
        color:colors.black.hard
    }

}) 