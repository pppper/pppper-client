import 'styled-components';

declare module 'styled-components' {
  export interface IThemeColors {
    primary1: string;
    primary2: string;
    primary3: string;
    black: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    gray7: string;
    white: string;
    red1: string;
  }

  export interface DefaultTheme {
    colors: IThemeColors;
  }
}
