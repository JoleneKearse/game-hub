import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config, colors: {
  "brand": {
    50: "#FAF0FF",
    100: "#F6E6FF",
    200: "#ECC7FF",
    300: "#DF9FFF",
    400: "#CA62FE",
    500: "#9201DB",
    600: "#8401C6",
    700: "#7701B2",
    800: "#660198",
    900: "#400060",
    950: "#2F0047"
  },
  "gray": {
      50: "#FAF0FF",
      100: "#F5E1FF",
      200: "#E9BDFF",
      300: "#DB95FE",
      400: "#C34EFE",
      500: "#660198",
      600: "#5C0189",
      700: "#4E0175",
      800: "#400160",
      900: "#2F0047",
      950: "#2F0047"
    }
} });

export default theme;


