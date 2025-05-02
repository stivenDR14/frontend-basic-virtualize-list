import { createTheme } from "@mui/material";
import SignikaNegativeRegular from "/fonts/SignikaNegative-Regular.ttf";
import SignikaNegativeBold from "/fonts/SignikaNegative-Bold.ttf";
import SignikaNegativeSemiBold from "/fonts/SignikaNegative-SemiBold.ttf";
import SignikaNegativeMedium from "/fonts/SignikaNegative-Medium.ttf";
import SignikaNegativeLight from "/fonts/SignikaNegative-Light.ttf";

const typografyTheme = {
  typography: {
    fontFamily: "SignikaNegative",
    h1: {
      fontFamily: "SignikaNegative",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "SignikaNegative",
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "SignikaNegative",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: "SignikaNegative",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: "SignikaNegative",
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: "SignikaNegative",
      fontWeight: 200,
      fontSize: 12,
      lineHeight: 1.2,
    },
    body1: {
      fontFamily: "SignikaNegative",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.2,
    },
    body2: {
      fontFamily: "SignikaNegative",
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.2,
    },
    subtitle1: {
      fontFamily: "SignikaNegative",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.2,
    },
    subtitle2: {
      fontFamily: "SignikaNegative",
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.2,
    },
    button: {
      fontFamily: "SignikaNegative",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.2,
    },
    caption: {
      fontFamily: "SignikaNegative",
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.2,
    },
    overline: {
      fontFamily: "SignikaNegative",
      fontWeight: 200,
      fontSize: 12,
      lineHeight: 1.2,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `

      @font-face: {
        fontFamily: "SignikaNegative",
        fontWeight: 400,
        fontStyle: "normal",
        src: url(${SignikaNegativeRegular}),
      },
      @font-face: {
        fontFamily: "SignikaNegative",
        fontWeight: 700,
        fontStyle: "normal",
        src: url(${SignikaNegativeBold}),
      },
      @font-face: {
        fontFamily: "SignikaNegative",
        fontWeight: 600,
        fontStyle: "normal",
        src: url(${SignikaNegativeSemiBold}),
      },
      @font-face: {
        fontFamily: "SignikaNegative",
        fontWeight: 600,
        fontStyle: "normal",
        src: url(${SignikaNegativeMedium}),
      },
      @font-face: {
        fontFamily: "SignikaNegative",
        fontWeight: 300,
        fontStyle: "normal",
        src: url(${SignikaNegativeLight}),
      },
      @font-face: {
        fontFamily: "SignikaNegative",
        fontWeight: 200,
        fontStyle: "normal",
        src: url(${SignikaNegativeLight})
      }
      `,
    },
  },
};

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#353535",
      light: "#284B63",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#3C6E71",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#D9D9D9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#141414",
      secondary: "#383838",
    },
    error: {
      main: "#862A14",
    },
    warning: {
      main: "#D9D9D9",
    },
    info: {
      main: "#383838",
    },
    success: {
      main: "#3C6E71",
    },
    common: {
      black: "#141414",
      white: "#fff",
    },
  },
  ...typografyTheme,
});
