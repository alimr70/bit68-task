import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { extendTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const breakpoints = {
    xs: "23.4375em",
  };
  const { locale } = useRouter();
  const direction = locale === "ar" ? "rtl" : "ltr";

  const theme = extendTheme({ breakpoints, direction });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
