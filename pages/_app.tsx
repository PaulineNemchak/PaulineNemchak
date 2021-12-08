import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource/m-plus-1';
import '@fontsource/m-plus-1/700.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
