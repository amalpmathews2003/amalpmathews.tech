import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box,Container,Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Box borderRadius={"lg"} bg={"red"} p={3} mb={3} align={"center"}>
          hello i&apos;m a full-stack developer 
      </Box>
      <Box display={{md:"flex"}}>
        <Box flexGrow={1}>
          <Heading as={"h2"} variant="page-title">
            Amal P Mathews
          </Heading>
          <p>Developer,Progammer</p>
        </Box>
      </Box>
    </Container>
  )
}
