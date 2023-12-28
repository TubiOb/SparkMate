import { extendTheme } from "@chakra-ui/react";
// import { Global } from "@emotion/react";



const theme = extendTheme({
  colors: {
    black: {
      100: "#000",
      200: "#061101",
    },
    white: {
      100: "#fff",
    },
    grey: {
      100: "#F7F7F7",
      200: "#575757",
      300: "#868686",
      400: "#ddd",
    },
    blue: {
      100: "#00082F",
      200: "#0095E8",
    },
    red: {
      100: "#EB3349",
      200: "#F45C43",
    },
    purple: {
      100: "#674CCD",
      200: "#D5A9FF",
      300: "#FBF8FF"
    },
  },
  fonts: {
    body: `'ID Grotesk Trial', sans-serif `,
  },
});
export default theme;