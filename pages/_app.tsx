// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import { Providers } from "@/lib/providers";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, maximum-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta
          name="keywords"
          content="carsan, car sharing, car sharing service, car rental"
        />
        <meta name="layoutmode" content="fitscreen/standard" />
        <meta name="imagemode" content="force" />
        <meta name="screen-orientation" content="portrait" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-TileColor" content="#8E61FF" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://cars.carsan.com/" />
        <meta name="twitter:title" content={"Калькулятор баллов ЕГЭ"} />
        <meta name="twitter:description" content="Калькулятор баллов ЕГЭ" />
        {/* <meta name="twitter:image" content={meta.image} /> */}
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}
