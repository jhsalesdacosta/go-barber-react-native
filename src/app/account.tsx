import { colors } from "@/style/colors";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import barber from "@/assets/image/icon.png"
import { InputText } from "@/components/input-text";
import { IconUser } from "@tabler/icons-react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { IconLock, IconMail, IconArrowLeft } from "@tabler/icons-react-native";
import { useState } from "react";
import { Button } from "@/components/Button";
import { router } from "expo-router";


export default function Account() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassoword] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: colors.black.base, justifyContent: "center", alignItems: "center", }} >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", maxHeight: 300, }}>
                <Image source={barber} />
            </View>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", maxHeight: 300, marginBottom: 200 }}>
                <Text style={{ fontSize: 20, color: colors.white.base }}> Crie sua conta </Text>
                <SafeAreaProvider>
                    <SafeAreaView>
                        <InputText
                            icon={IconUser}
                            value={name}
                            onChangeText={setName}
                            placeholder="Nome"
                        />
                        <InputText
                            icon={IconMail}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="E-mail"
                        />
                        <InputText
                            icon={IconLock}
                            value={password}
                            onChangeText={setPassoword}
                            placeholder="Senha"
                            keyboardType="numeric"
                        />
                    </SafeAreaView>
                </SafeAreaProvider>

                <Button onPress={() => router.navigate("/add")}>
                    <Button.Title>Cadastrar</Button.Title>
                </Button>

            </View>
            <View style={{ flex:1, marginBottom: 10, flexDirection: "row",  alignItems: "center", justifyContent:"center", maxHeight:60, width:1000, borderTopWidth:1, borderTopColor:colors.black.medium    }}>
                
                    <IconArrowLeft
                    style={{marginRight:10}} 
                    color={colors.white.base}/>
                

                <Button style={{
                    width: 150,
                    marginBottom: 20,
                    
                }}
                    activeOpacity={0.5} >

                    <Button.Title style={{ color: colors.white.base, fontSize: 16, marginTop:18 }} onPress={() => router.back()} >Voltar para o login</Button.Title>

                </Button>
            </View>
        </View>
    )
}

