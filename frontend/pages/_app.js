import { Web3Provider } from "../contexts/Web3Context";
import { default as NextHead } from "next/head";
import "../styles/globals.scss";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <NextHead>
        <base href="/" />
        <meta charSet="utf-8" />
        <title>Tuks - A decentralized ticket app</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </NextHead>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Web3Provider>
  );
}

export default MyApp;
