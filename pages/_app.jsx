import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";
import "../styles/globals.css";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "23.4375em",
};

const theme = extendTheme({ breakpoints });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
