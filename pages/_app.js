// import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/layout/main'
import theme from '../lib/theme'

function Website({ Component, pageProps,router }) {

  return (
    <ChakraProvider >
      <Layout router={router} >
        <Component {...pageProps} key={router.router}/>
      </Layout>
    </ChakraProvider>
  )

}

export default Website
