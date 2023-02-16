import { extendTheme } from "@chakra-ui/react";
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'

import '@fontsource/raleway'
import Button from "./button";
export const theme = extendTheme({
  //set the color scheme
  colors: {
    brand: {
      100: "#FF3c00"
    },
  },
  //set the font info
  font: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  //custom some global styles
  styles: {
    global: {
      body: {
        bg: "gray.200",

      },
    },
  },
  //import some prebuild components in need
  components: {
    Button
  }
})


