import { createMuiTheme } from "@material-ui/core";
import {
  yellow,
  blue,
  red,
  pink,
  cyan,
  orange,
} from "@material-ui/core/colors";

const typography = {
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

const dark = {
  type: "dark",
  primary: {
    main: "#000",
    customContrastColor: "#f50057",
  },
  secondary: {
    main: yellow[50],
    light: yellow[50],
    dark: yellow[50],
  },
  // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 4,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,
};

const light = {
  type: "light",
  primary: {
    main: "#fff",
    light: "#fff",
    dark: "#fff",
    customContrastColor: pink["A400"],
  },
  secondary: {
    main: "#000",
    light: "#000",
    dark: "#000",
  },
  // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,
};

const theme = createMuiTheme({
  palette: light,
  typography,
  spacing: 4,
  cardHeight: 171,
});

export default theme;
