import { colors, fontFamily } from "@/style/theme";
import { StyleSheet } from "react-native";


export const s = StyleSheet.create({
    container:{
        
        height:136,
        width:400,
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        gap:6,
        padding:20
        
        
    },
    header:{
        flex:1,
        maxWidth:260,
        maxHeight:56,
        

    },
    title:{
        color:colors.orange.base,
        fontFamily: fontFamily.medium,
        fontSize:20,
    },
    welcome:{
        color:colors.gray.hard,
        fontFamily:fontFamily.regular,
        fontSize:20,
    },
    


})