import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/300.css';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#1B1717',
        color: '#ffffff',
      },
    },
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
