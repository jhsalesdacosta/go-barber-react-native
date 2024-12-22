import { FlatList, ScrollView, Text, View } from "react-native";
import { s } from "./style";
import Barbers from "../barbers";

export function Barber() {
    return (
        <View style={{gap:25, marginTop:40}}>
            <Text style={s.text}>Cabeleireiros</Text>
            <ScrollView>
                <Barbers/>
                {/* <FlatList>
                
                </FlatList> */}
            </ScrollView>
        </View>
    )
}