// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Калькулятор ЕГЭ</title>
        <meta name="description" content="Приемная комиссия ТГПИ" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta
          name="keywords"
          content="калькулятор егэ, егэ, тгпи, чеховский институт, иститут чехова, чехов, таганрог, таганрогский институт чехова, ринх филиал"
        />
        <meta name="msapplication-TileColor" content="#228be6" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://grade-calculator-woad.vercel.app/"
        />
        <meta name="twitter:title" content="Калькулятор ЕГЭ" />
        <meta name="twitter:description" content="Приемная комиссия ТГПИ" />
        <meta name="twitter:image" content="/twitter-image.png" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <MantineProvider defaultColorScheme="auto">
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
