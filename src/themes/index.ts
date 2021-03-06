import { DefaultTheme, IThemeColors } from 'styled-components';

const defaultThemeColors: IThemeColors = {
  primary1: '#6129FF',
  primary2: '#7A59FF',
  primary3: '#A697FF',
  black: '#000000',
  gray1: '#2C2A32',
  gray2: '#555561',
  gray3: '#9796A0',
  gray4: '#CFCED4',
  gray5: '#DFDFE7',
  gray6: '#EFEEF3',
  gray7: '#F7F7F8',
  white: '#ffffff',
  red1: '#FF3232',
};
export const lightTheme: DefaultTheme = {
  colors: defaultThemeColors,
};
