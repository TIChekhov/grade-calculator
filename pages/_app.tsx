// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { getWebsiteMeta } from "@/utils/meta";
import { MantineProvider } from "@mantine/core";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  /**
   * Default app meta
   */
  const meta = getWebsiteMeta();
  return (
    <>
      <DefaultSeo {...meta} />
      <Head>
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
        <meta
          name="twitter:title"
          content="Калькулятор ЕГЭ | ТИ имени А.П.Чехова"
        />
        <meta
          name="twitter:description"
          content="Приемная комиссия ТИ имени А.П.Чехова"
        />
        <meta name="twitter:image" content="/twitter-image.png" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <MantineProvider defaultColorScheme="auto">
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
