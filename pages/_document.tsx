import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1.6,user-scalable=no"
        />
        <Head>
          <meta charSet="utf-8" />

          <title>이웃사천</title>
          <meta name="description" content="게임을 즐겨보세요!" />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="이웃사천" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="msapplication-navbutton-color" content="#fbb03b" />
          <meta name="msapplication-TileColor" content="#fbb03b" />
          <meta name="msapplication-config" content="browserconfig.xml" />
          <meta name="application-name" content="이웃사천" />
          <meta name="msapplication-tooltip" content="Tooltip Text" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />

          <meta name="nightmode" content="enable/disable" />
          <meta name="layoutmode" content="fitscreen/standard" />
          <meta name="imagemode" content="force" />
          <meta name="screen-orientation" content="portrait" />
          <meta name="theme-color" content="#fbb03b" />
          <meta name="msapplication-navbutton-color" content="#fbb03b" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#fbb03b"
          />

          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content="643839059141513" />

          <meta property="al:ios:url" content="applinks://docs" />
          <meta property="al:ios:app_store_id" content="12345" />
          <meta property="al:ios:app_name" content="App Links" />
          <meta property="al:android:url" content="applinks://docs" />
          <meta property="al:android:app_name" content="App Links" />
          <meta property="al:android:package" content="org.applinks" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
