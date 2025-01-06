import { StyleSheet } from "react-native";
import {colors, fontFamily} from "@/style/theme"

export const s = StyleSheet.create({
    container:{
        height: 36,
        backgroundColor: colors.black.soft,
        borderWidth: 1,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal: 12,
        gap:10,
    },
    name: {
        fontSize:13,
        color: colors.white.base,
        fontFamily: fontFamily.medium, 
    },
    containerSelected:{
        backgroundColor:colors.orange.base,
        borderWidth:1,
    },

    nameSelected:{
        color: colors.black.hard
    }
    
})