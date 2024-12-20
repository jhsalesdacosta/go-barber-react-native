import React, { ForwardRefExoticComponent, ReactSVG } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { s } from "./style"
import { fontFamily } from '@/style/font-family';
import { IconMail } from '@tabler/icons-react-native';
import { colors } from '@/style/colors';
import { SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
  size?: string | number;
  strokeWidth?: string | number;
  title?: string;
}
type Icon = ForwardRefExoticComponent<IconProps>;

type Props = TextInputProps & {
  placeholder: string
  value: string
  // onChange: (value : string) => void
  icon: Icon
}

export const InputText = ({ onChange, placeholder, value, icon: Icon, ...rest }: Props) => {


  return (

    <View style={s.inputText}>
      <Icon style={s.logo} />
      <TextInput
        style={{ color: "white" }}
        placeholder={placeholder}
        placeholderTextColor={colors.gray.hard}
        value={value}
        {...rest}
      />
    </View>

  );
};

