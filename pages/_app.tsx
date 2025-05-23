import "../styles/globals.css";
import type { AppProps } from "next/app";
import SeoHead from "../components/SeoHead";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SeoHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
