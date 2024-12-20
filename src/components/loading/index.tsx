import { ActivityIndicator} from "react-native"

import {s} from "./style"
import {colors} from "@/style/theme"

export function Loading(){
    return(
    <ActivityIndicator color={colors.white.base} style={s.container}/>
    )
}