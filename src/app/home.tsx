import { Barber } from "@/components/barber";
import { Header } from "@/components/header";
import { colors } from "@/style/theme";
import { Text, View } from "react-native";

export default function Home() {
    return(
        <View 
        style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:colors.black.medium}}>
            <Header> 
                <Header.Welcome/>
                <Header.Title>
                    Henrique Sales
                </Header.Title>
            </Header>
            <View style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:colors.black.base, width:400,}}>
            <Barber/>
            </View>
        </View>
    )

}