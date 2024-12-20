import { colors } from "@/style/theme";
import { StatusBar, Text, View } from "react-native";
import { IconCheck } from "@tabler/icons-react-native"
import LottieView from "lottie-react-native"
import React, { useRef } from "react";
import { Button } from "@/components/Button";
import { router } from "expo-router";


export default function Add() {
    return (
        <View style={{ flex: 1, backgroundColor: colors.black.base, alignItems: "center", justifyContent: "center", gap:30 }}>
            <View >
                <LottieView
                    source={require("@/assets/check.json")}
                    autoPlay={true}
                    loop={false}
                    style={{ width: 200, height: 200 }}
                />
            </View>
            <Text style={{ color: colors.white.base, fontSize: 30, }}>Cadastramento {"\n     "} concluído </Text>
            <Text style={{ color: colors.gray.hard }}>Agora é só fazer seu login.</Text>
            <Button
            onPress={()=> router.back()} 
            >
                <Button.Title
                
                >Ok</Button.Title>
            </Button>
        </View>
    )

}