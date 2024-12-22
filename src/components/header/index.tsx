import { Text, View, TextProps, Image } from "react-native";
import { s } from "./style"
import { ProfilePicture } from "../profilePicture"





function Header(){
    return(
        <View style={s.container}>
            <View style={s.header}>
                <Text style={s.welcome}>Welcome,</Text>
                <Header.Title>Henrique Sales</Header.Title>
            </View>
            <ProfilePicture/>
        </View>
    )
}


function Title({children}: TextProps){
    return(
        <Text style={s.title}>{children}</Text>
    )
}

Header.Title = Title

export {Header}