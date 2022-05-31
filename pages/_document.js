import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";
import theme from "../lib/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="canonical" href="https://www.amalpmathews.tech/" />
          <meta name="author" content="Amal P Mathews" />
          <meta name="description" content="This is my personal website" />
          <meta
            property="og:description"
            content="This is my personal website"
          />
          <meta property="og:url" content="https://www.amalpmathews.tech/" />
          <meta property="og:type" content="portfolio-website" />
          <meta
            property="og:image"
            content="https://drive.google.com/uc?id=1LuJus2azm3iaSj1ydc1ro6p8HPMn3L0M"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
// G-CYWF32SRCC
