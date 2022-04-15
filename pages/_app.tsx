import GlobalCSS from "../styles/globals";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalCSS />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
