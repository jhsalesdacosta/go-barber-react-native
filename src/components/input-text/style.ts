import { StyleSheet } from "react-native";
import {colors, fontFamily} from "@/style/theme"

export const s = StyleSheet.create({ 
        
        logo: {
            width: 48,
            height: 48,
            marginRight:10,
            color: colors.gray.hard
        },
        inputText:{
            flexDirection:"row" ,
            alignItems:"center",
            padding:12, 
            width:295,
            height:50,
            borderRadius:10,
            marginTop:10,
            backgroundColor:colors.black.hard,
            fontFamily:fontFamily.medium,
        },
    },
  );
  
  