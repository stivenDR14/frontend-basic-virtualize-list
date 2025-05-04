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

      @font-face {
        font-family: SignikaNegative;
        font-weight: 400;
        font-style: normal;
        src: url(${SignikaNegativeRegular})  format("truetype");
      }
      @font-face {
        font-family: SignikaNegative;
        font-weight: 700;
        font-style: normal;
        src: url(${SignikaNegativeBold})  format("truetype");
      }
      @font-face {
        font-family: SignikaNegative;
        font-weight: 600;
        font-style: normal;
        src: url(${SignikaNegativeSemiBold})  format("truetype");
      }
      @font-face {
        font-family: SignikaNegative;
        font-weight: 600;
        font-style: normal;
        src: url(${SignikaNegativeMedium})  format("truetype");
      }
      @font-face {
        font-family: SignikaNegative;
        font-weight: 300;
        font-style: normal;
        src: url(${SignikaNegativeLight})  format("truetype");
      }
      @font-face {
        font-family: SignikaNegative;
        font-weight: 200;
        font-style: normal;
        src: url(${SignikaNegativeLight})  format("truetype");
      }
      `,
    },
  },
};

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#353535",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#284B63",
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
