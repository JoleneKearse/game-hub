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
} });

export default theme;