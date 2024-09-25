import { StyleSheet, Text, TextProps, useColorScheme, View } from 'react-native'
import React from 'react';
import { Colors } from '@/constants/Colors';

const ThemedText = ({ style, children, ...rest }: TextProps) => {
    const colorScheme = useColorScheme();
    const color = Colors[colorScheme ?? 'light'].text;
  return (
    <View>
      <Text style={[style, { color }]} {...rest}>{children}</Text>
    </View>
  )
}

export default ThemedText;

const styles = StyleSheet.create({})