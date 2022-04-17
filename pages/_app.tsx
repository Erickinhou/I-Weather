import type { AppProps } from "next/app";
// Toast CSS
import "react-toastify/dist/ReactToastify.min.css";
import GlobalCSS from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalCSS />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
