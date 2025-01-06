import { Text, Pressable, PressableProps } from "react-native";
import {s} from "./style"


type Props = PressableProps & {
    
    isSelected?: boolean
    name: string
    
}

export function Category({name, isSelected = false, ...rest }: Props){
    
    return(
    <Pressable style={[s.container , isSelected && s.containerSelected]} {...rest}>

        <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
    </Pressable>

)

}

