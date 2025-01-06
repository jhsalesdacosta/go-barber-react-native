// import { colors, fontFamily } from "@/style/theme";
// import { StyleSheet } from "react-native";

// export const s = StyleSheet.create({
//     container: {
//         flex: 1,
//         borderWidth: 1,
//         borderColor:"green",
//         padding:12,
//     },
//     text: {
//         fontFamily:fontFamily.medium,
//         fontSize:25,
//         color:colors.white.base

//     }
// })
import { colors } from "@/style/colors"
import { fontFamily } from "@/style/font-family"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black.base,
    padding: 24,
    
    
  },
  calendar: {
    backgroundColor: colors.black.soft,
    borderRadius:10,
  },
  selected: {
    color: "#fff",
    fontSize: 25,
    fontFamily:fontFamily.medium
  },
  dayText: {
    color: "#E8E8E8",
  },
  day: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  disabled: {
    color: "#717171",
  },
  today: {
    color: "#F06543",
    fontWeight: "bold",
  },
  daySelected: {
    backgroundColor: "#F06543",
  },
})