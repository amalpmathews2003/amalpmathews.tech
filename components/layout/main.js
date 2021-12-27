import Head from "next/head";
import { Box,Container } from "@chakra-ui/react";
import Navbar from "../navbar";

export default function Main({children,router}){
      return(
            <Box as="main" pb={8}>
                  <Head>
                  <meta name="viewport" content="width=device-width, initial-scale=1" />  
                  <link rel="canonical" href="https://www.amalpmathews.tech/"/>
                  <meta name="description"
                        content="This is my personal website"/>
                  <meta property="og:title" content="Amal P Mathews"/>
                  <meta property="og:description" content="This is my personal website"/>
                  <meta property="og:url" content="https://www.amalpmathews.tech/"/>
                  <meta property="og:type" content="website"/>

                  <title>Amal P Mathews - Homepage</title>
                  </Head>
                  <Navbar path={router.asPath}/>
                  <Container maxW={"container.md"} pt={14}>
                        {children}
                  </Container>
            </Box>
      )
}