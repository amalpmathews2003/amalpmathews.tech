// import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/main";
import theme from "../lib/theme";
import Fonts from "../components/font";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CYWF32SRCC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CYWF32SRCC');
        `}
      </Script>

      {/* <Fonts /> */}
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.router} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default Website;
