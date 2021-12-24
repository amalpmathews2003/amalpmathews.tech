import { Box, Button, Container, Heading, Image, Link, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
export default function Home() {
  return (
    <Container>
      <Box borderRadius={"lg"} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={3} align={"center"}>
        hello i&apos;m a full-stack developer
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as={"h2"} variant="page-title">
            Amal P Mathews
          </Heading>
          <p>Developer,Progammer</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/amal.png"
            alt="profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant={"section-title"}>Work</Heading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Currently working on project {''}
          <NextLink href="/works/inkdorp">
            <Link color={"red"}>Inkdorp</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme={"teal"}
            >My Protfolio</Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant={"section-title"}>
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Kerala,India
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed secondary education
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          will
        </BioSection>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Problem solving,
          Competative programming,
          Website development,{' '}
          Music,{' '}Playing keyboard
        </Paragraph>
      </Section>
    </Container>
  )
}
