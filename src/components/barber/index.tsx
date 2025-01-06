import { FlatList, ScrollView, Text, View } from "react-native";
import { s } from "./style";
import Barbers from "../barbers";

export function Barber() {
    return (
        <View style={{ flex: 1, gap: 20, marginTop: 25,  width: 327 }}>
            <Text style={s.text}>Cabeleireiros</Text>

            <ScrollView >
                <Barbers >Fernando Oliveira</Barbers>
            </ScrollView>

            {/* <FlatList>
                
                </FlatList> */}

        </View>
    )
}