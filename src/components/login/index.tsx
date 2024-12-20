import { View, Text, Image, TouchableOpacity } from "react-native";
import { IconMail, IconLock } from "@tabler/icons-react-native"
import { s } from "./style"
import { colors } from "@/style/colors";
import barber from "@/assets/image/icon.png"
import { InputText } from "@/components/input-text"
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../Button";
import { router } from "expo-router";

import { Icon } from "../Button"
import { fontFamily } from "@/style/font-family";

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassoword] = useState('');

    return (
        <View style={{ flex: 1 }}>
            <View style={s.container}>
                <Image source={barber} style={s.icon} />
                <View>

                </View>
                <Text style={s.title}>Faça seu Login</Text>

                <SafeAreaProvider>
                    <SafeAreaView>
                        <InputText
                            style={{fontFamily:fontFamily.regular}}
                            icon={IconMail}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="E-mail"
                        />
                        <InputText
                         style={{fontFamily:fontFamily.regular}}
                            icon={IconLock}
                            value={password}
                            onChangeText={setPassoword}
                            placeholder="Senha"
                            keyboardType="numeric"
                        />
                    </SafeAreaView>
                </SafeAreaProvider>

                <Button 
                onPress={() => router.navigate("/home")}
                >
                    <Button.Title>Entrar</Button.Title>
                </Button>


                <Button
                    style={{
                        width: 150,
                        alignItems: "center",
                    }} >

                </Button>
                <TouchableOpacity>
                    <Button.Title style={{ color: colors.white.base, fontFamily:fontFamily.regular }} >Esqueci minha senha</Button.Title>
                </TouchableOpacity>
            </View>

            <View style={{
                height: 70,
                width: 400,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: colors.black.medium
            }}>

                <Icon />

                <Button style={{
                    width: 150,
                    alignItems: "center",
                    marginBottom: 20
                }}
                    activeOpacity={0.5} >

                    <Button.Title
                        onPress={() => router.navigate("/account")}
                        style={{ 
                        color: colors.orange.base, 
                        fontSize: 16, 
                        fontFamily:fontFamily.regular
                        }} >Criar uma conta</Button.Title>

                </Button>

            </View>
        </View>
    )
}