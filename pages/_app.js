// import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/layout/main'
import theme from '../lib/theme'
import Fonts from '../components/font'
function Website({ Component, pageProps,router }) {

  return (
    <ChakraProvider>
      <Fonts/>
      <Layout router={router} >
        <Component {...pageProps} key={router.router}/>
      </Layout>
    </ChakraProvider>
  )

}

export default Website
