import { Text, View, TextProps, Image, TouchableOpacity } from "react-native";
import { s } from "./style"
import { ProfilePicture } from "../profilePicture"
import { ReactNode } from "react";
import { router } from "expo-router";


type Props = {
    children: ReactNode
    isRow?: boolean
}


function Header({ children, isRow = false }: Props) {
    return (
        <View style={s.container}>
            <View style={[s.header, isRow && { flexDirection: "row", gap: 60 }]}>
                {children}
            </View>
            <TouchableOpacity onPress={() => router.navigate("/profile")}>
                <ProfilePicture />
            </TouchableOpacity>
        </View>
    )
}


function Title({ children, ...rest }: TextProps) {
    return (
        <Text style={[s.title, rest.style]}>{children}</Text>
    )
}

function Welcome() {
    return (
        <Text style={s.welcome}>Welcome,</Text>
    )
}



Header.Title = Title
Header.Welcome = Welcome

export { Header }