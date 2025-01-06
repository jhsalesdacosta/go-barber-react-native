// import { Text, View } from "react-native";
// import { s } from "./style";

// export function  Calendar (){
//     return(
//         <View style={s.container}>
//             <Text style={s.text}>Escolha a data</Text>
//         </View>
//     )
// }
import { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Calendar, DateData, LocaleConfig } from "react-native-calendars"
import { DayState } from "react-native-calendars/src/types"

import { Feather } from "@expo/vector-icons"

import { ptBR } from "../../../utils/localeCalendarConfig"
import { styles } from "./style"
import { colors } from "@/style/colors"

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

export function Home() {
  const [day, setDay] = useState<DateData>()

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        renderArrow={(direction: "right" | "left") => (
          <Feather size={24} color="#E8E8E8" name={`chevron-${direction}`} />
        )}
        headerStyle={{
          borderBottomWidth: 0.5,
          borderBottomColor: "#E8E8E8",
          paddingBottom: 10,
          marginBottom: 10,
        }}
        theme={{
          textMonthFontSize: 18,
          monthTextColor: "#E8E8E8",
          todayTextColor: "#F06543",
          selectedDayBackgroundColor: "#F06543",
          selectedDayTextColor: "#E8E8E8",
          arrowColor: "#E8E8E8",
          calendarBackground: colors.black.medium,
          textDayStyle: { color: "#E8E8E8" },
          textDisabledColor: "#717171",
          arrowStyle: {
            margin: 0,
            padding: 0,
          },
        }}
        minDate={new Date().toDateString()}
        hideExtraDays
        onDayPress={setDay}
        markedDates={
          day && {
            [day.dateString]: { selected: true },
          }
        }
        dayComponent={({
          date,
          state,
        }: {
          date: DateData
          state: DayState
        }) => {
          return (
            <TouchableOpacity
              style={[
                styles.day,
                date.dateString === day?.dateString && styles.daySelected,
              ]}
              onPress={() => setDay(date)}
            >
              <Text
                style={[
                  styles.dayText,
                  (state === "inactive" || state === "disabled") &&
                    styles.disabled,
                  state === "today" && styles.today,
                  date.dateString === day?.dateString && styles.dayText,
                ]}
              >
                {date.day}
              </Text>
            </TouchableOpacity>
          )
        }}
      />

      <Text style={styles.selected}>Escolha o horario: {day?.dateString}</Text>


    </View>
  )
}