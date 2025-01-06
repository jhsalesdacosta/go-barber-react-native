import { Button } from "@/components/Button"
import { s } from "@/components/Button/style"
import { Home } from "@/components/calendar"
import { Categories } from "@/components/categories"
import { Header } from "@/components/header"
import { Hours } from "@/components/hours"
import { colors, fontFamily } from "@/style/theme"
import { IconArrowLeft } from "@tabler/icons-react-native"
import { router } from "expo-router"
import { useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"


export default function scheduled() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleSelect = (id: string) => {
        setSelectedId(id === selectedId ? null : id);
    };

    return (
        <View style={{ flex: 1,backgroundColor:colors.black.base, width:"100%"  ,justifyContent: "center", alignItems: "center" }}>
            <View style={{backgroundColor: colors.black.medium,}}>

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
                    }>   Agendamento</Header.Title>

                </Header>

                {/* <View style={{ borderWidth: 5 }}>

                </View> */}

                <Home />
                <View style={{ flex: 1, backgroundColor: colors.black.base }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ backgroundColor: colors.black.base, padding: 24, flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: fontFamily.medium, fontSize: 14, color: colors.gray.base }}>Manhã:  </Text>

                            <Hours
                                id="1"
                                isSelected={selectedId === "1"}
                                onSelect={handleSelect}
                            >08:00</Hours>

                            <Hours
                                id="2"
                                isSelected={selectedId === "2"}
                                onSelect={handleSelect}
                            >09:00</Hours>

                            <Hours
                                id="3"
                                isSelected={selectedId === "3"}
                                onSelect={handleSelect}
                            >10:00</Hours>

                            <Hours
                                id="4"
                                isSelected={selectedId === "4"}
                                onSelect={handleSelect}
                            >11:00</Hours>
                        </View>
                        <View style={{ backgroundColor: colors.black.base, padding: 24, flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: fontFamily.medium, fontSize: 14, color: colors.gray.base }}>Tarde:     </Text>

                            <Hours
                                id="5"
                                isSelected={selectedId === "5"}
                                onSelect={handleSelect}
                            >13:00</Hours>

                            <Hours
                                id="6"
                                isSelected={selectedId === "6"}
                                onSelect={handleSelect}
                            >14:00</Hours>

                            <Hours
                                id="7"
                                isSelected={selectedId === "7"}
                                onSelect={handleSelect}
                            >15:00</Hours>

                            <Hours
                                id="8"
                                isSelected={selectedId === "8"}
                                onSelect={handleSelect}
                            >16:00</Hours>
                        </View>
                        <View style={{ backgroundColor: colors.black.base, padding: 24, flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: fontFamily.medium, fontSize: 14, color: colors.gray.base }}>Noite:     </Text>

                            <Hours
                                id="9"
                                isSelected={selectedId === "9"}
                                onSelect={handleSelect}
                            >17:00</Hours>

                            <Hours
                                id="10"
                                isSelected={selectedId === "10"}
                                onSelect={handleSelect}
                            >18:00</Hours>

                            <Hours
                                id="11"
                                isSelected={selectedId === "11"}
                                onSelect={handleSelect}
                            >19:00</Hours>

                            <Hours
                                id="12"
                                isSelected={selectedId === "12"}
                                onSelect={handleSelect}
                            >20:00</Hours>
                        </View>
                    </ScrollView>
                    <View style={{alignItems:"center"}}>
                        <Button onPress={() => router.navigate("/scheduledSuccess")}>
                            <Button.Title> Agendar </Button.Title>
                        </Button>
                    </View>
                </View>
            </View>

        </View>
    )
}