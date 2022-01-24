// import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/layout/main'
import theme from '../lib/theme'
import Fonts from '../components/font'
import {AnimatePresence} from "framer-motion"
function Website({ Component, pageProps,router }) {

  return (
    <ChakraProvider>
      <Fonts/>
      <Layout router={router} >
        <AnimatePresence
          exitBeforeEnter initial={true}
        >
        <Component {...pageProps} key={router.router}/>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )

}

export default Website
