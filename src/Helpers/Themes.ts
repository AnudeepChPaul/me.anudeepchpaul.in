import { createMuiTheme, Theme } from "@material-ui/core";
import {
  yellow,
  blue,
  red,
  pink,
  cyan,
  orange,
  lightBlue,
} from "@material-ui/core/colors";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";

interface CustomTheme extends Theme {
  cardHeight?: Number;
}

const typography: TypographyOptions = {
  fontFamily: [
    "Montserrat",
    "sans-serif",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    "Arial",
  ].join(","),
  body1: {
    fontWeight: 300,
  },
  h2: {
    fontWeight: 100,
  },
  h3: {
    fontWeight: 300,
    textTransform: "uppercase",
  },
  h6: {
    fontWeight: 300,
  },
  body2: {
    fontWeight: 300,
  },
};

const dark: PaletteOptions = {
  type: "dark",
  primary: {
    main: "#000",
  },
  secondary: {
    main: yellow[50],
    light: yellow[50],
    dark: yellow[50],
  },
  error: {
    main: pink["A400"],
  },
  info: {
    main: lightBlue["A700"],
  },
  warning: {
    main: yellow["A700"],
  },
  // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 4,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,
};

const light: PaletteOptions = {
  type: "light",
  primary: {
    main: "#fff",
    light: "#fff",
    dark: "#fff",
  },
  secondary: {
    main: "#000",
    light: "#000",
    dark: "#000",
  },
  error: {
    main: pink["A400"],
  },
  // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,
};

const theme: CustomTheme = createMuiTheme({
  palette: dark,
  typography,
  spacing: 4,
});

export default theme;
