import { View, TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator, StyleProp, ViewStyle} from "react-native";
import { s } from "./style"
import {colors, fontFamily} from "@/style/theme"
import { TextProps } from "react-native";
import {IconLogin2, IconProps as TablerIconProps } from "@tabler/icons-react-native"

type ButtonProps = TouchableOpacityProps&{
    isLoading?: boolean
}

function Button ({children, isLoading = false, ...rest}: ButtonProps){
    return(
        <TouchableOpacity
        style={[s.container, rest.style]}
        disabled={isLoading}
        {...rest}
        >
            {isLoading? (
                <ActivityIndicator size="small" color="white"/>
            ) : (
                children
            )}
            
            
        </TouchableOpacity>
    )
}

function Title ({children, ...rest} : TextProps){
    return(
        <Text style={[s.title, rest.style]}
        
        {...rest}
        >{children}</Text>
    )
}

Button.Title = Title




function Icon(){
    return(
    
        <IconLogin2 
        style={{marginBottom:20}}
        
        color={colors.orange.base}/>
    
    
     
    )
    
    }

export { Button, Icon };