import { Text, TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'defaultSemiBold' | 'title' | 'link';
};

export function ThemedText(props: ThemedTextProps) {
  const { style, lightColor, darkColor, type = 'default', ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  let fontFamily = undefined;
  let fontSize = 16;
  let fontWeight: 'normal' | 'bold' | '400' | '600' = 'normal';
  
  if (type === 'defaultSemiBold') {
    fontWeight = '600';
  } else if (type === 'title') {
    fontSize = 24;
    fontWeight = 'bold';
  } else if (type === 'link') {
    const linkColor = useThemeColor({}, 'tint');
    const color = linkColor;
  }

  return (
    <Text
      style={[{ color, fontFamily, fontSize, fontWeight }, style]}
      {...otherProps}
    />
  );
}