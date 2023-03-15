import type { AppProps } from "next/app";
import { init as fireabseInit } from "../firebase";
import "../styles/styles.scss";

fireabseInit();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div id="play2earnApp">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
