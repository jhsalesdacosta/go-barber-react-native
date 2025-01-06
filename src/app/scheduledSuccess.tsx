import { Button } from "@/components/Button";
import { colors } from "@/style/colors";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { Text, View } from "react-native";

export default function ScheduledSuccess(){
return(
    <View style={{ flex: 1, backgroundColor: colors.black.base, alignItems: "center", justifyContent: "center", gap:30 }}>
                <View >
                    <LottieView
                        source={require("@/assets/check.json")}
                        autoPlay={true}
                        loop={false}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
                <Text style={{ color: colors.white.base, fontSize: 30, }}>Agendamento {"\n     "} concluído </Text>
                <Text style={{ color: colors.gray.hard }}></Text>
                <Button
                onPress={()=> router.back()} 
                >
                    <Button.Title
                    
                    >Ok</Button.Title>
                </Button>
            </View>
)

}