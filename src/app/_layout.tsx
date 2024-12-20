import { Stack } from 'expo-router/stack';
import { colors } from '@/style/colors';
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium } from "@expo-google-fonts/roboto-slab"
import { Loading } from '@/components/loading';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
  })
  if (!fontsLoaded) {
    return <Loading />

  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} >
      <Stack screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.black.base
        }
      }}
      />
    </GestureHandlerRootView>
  )
}