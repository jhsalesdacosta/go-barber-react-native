import { Pressable, PressableProps, Text, TextProps, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { s } from "./style";
import { useState } from "react";

interface HoursProps extends TextProps {
    id: string;
    isSelected: boolean;
    onSelect: (id: string) => void;
  }


export function Hours( {id, isSelected, onSelect, children }: HoursProps)  {
    
    return (
        <View style={s.container}>
            <Pressable 
            style={({pressed}) => [
                s.content,
                isSelected && s.contentSelected,
                pressed && s.pressed
            ]}
            onPress={() => onSelect(id)}
            >
            
                <Text style={[s.text, isSelected && s.textSelected]}>{children}</Text>
            </Pressable>
        </View>
    )
}


