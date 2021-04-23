import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#CBBDFE",
      200: "#B4A2FE",
      300: "#7EA5F8",
      400: "#D8004F",
      500: "#973560",
      600: "#721C13",
      700: "#661003",
    },
  },
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  }
})

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>, document.querySelector('#root')
);