import { Button } from "@/components/Button";
import { Header } from "@/components/header";
import { InputText } from "@/components/input-text";
import { ProfilePicture } from "@/components/profilePicture";
import { colors } from "@/style/colors";
import { fontFamily } from "@/style/font-family";
import { IconArrowLeft, IconCamera, IconLock, IconMail, IconUser } from "@tabler/icons-react-native";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassoword] = useState('');
    const [newPassword, setNewPassoword] = useState('');
    const [confirmPassword, setConfirmPassoword] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: colors.black.base, alignItems: "center", justifyContent: "center", gap: 30 }}>
            <View>
                <Header isRow>

                    <TouchableOpacity onPress={router.back}>
                        <IconArrowLeft
                            size={32}
                            color={colors.gray.base} />
                    </TouchableOpacity>

                    <Header.Title style={
                        {
                            color: colors.white.base,
                            fontFamily: fontFamily.medium

                        }
                    }>       Meu Perfil</Header.Title>

                </Header>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
                <ProfilePicture
                    style={{
                        borderWidth: 1,
                        borderRadius: 250 / 2,
                        height: 250,
                        width: 250,
                    }}
                />
                <IconCamera
                    size={50}
                    color={colors.black.hard}
                    style={{ backgroundColor: colors.orange.base, borderRadius: 25, zIndex: 1, position: "absolute", right: 10, top: 100 }}
                />
            </View>
            
                <View style={{ flex: 1, width: 300, height: 140, marginTop: 80 }}>
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
                        </SafeAreaView>
                    </SafeAreaProvider>
                </View>

                <View style={{marginTop:30}}>

                    <InputText
                        icon={IconLock}
                        value={password}
                        onChangeText={setPassoword}
                        placeholder="Senha atual"
                        keyboardType="numeric"
                    />
                    <InputText
                        icon={IconLock}
                        value={password}
                        onChangeText={setPassoword}
                        placeholder="Nova senha"
                        keyboardType="numeric"
                    />
                    <InputText
                        icon={IconLock}
                        value={password}
                        onChangeText={setPassoword}
                        placeholder="Confirmar senha"
                        keyboardType="numeric"
                    />

                </View>

            
            <View style={{flex:1, marginBottom:50}}>
                <Button
                onPress={() => Alert.alert("Mudanças","Mudanças salvas com sucesso")}
                >
                    <Button.Title>Confirmar mudanças</Button.Title>
                </Button>
            </View>
        </View>
    )
}