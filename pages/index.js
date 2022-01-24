import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "@/components/article";
import { FiGithub } from "react-icons/fi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <Layout title={"Home Page"}>
      <Container>
        <Box
          borderRadius={"lg"}
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={3}
          align={"center"}
        >
          Hello Guys 
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
              src="/images/amal.webp"
              alt="profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant={"section-title"}>
            Work
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. Currently
            working on project {""}
            <NextLink href="/works/inkdorp">
              <Link color={"red"}>Inkdorp</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme={"teal"}>
                My Protfolio
              </Button>
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
            <BioYear>2020{" -"}</BioYear>
            Pursuing Btech in EEE at NITC
          </BioSection>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Problem solving, Competative programming, Website development,
            Music, Playing keyboard
          </Paragraph>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant={"section-title"}>
            On the web
          </Heading>
          <List>
            <ListItem>
              <a
                href={"https://github.com/amalpmathews2003"}
                target="_blank"
                rel="noreferrer"
              >
                <Link>
                  <Button
                    variant={"ghost"}
                    colorScheme={"teal"}
                    leftIcon={<Icon as={FiGithub}></Icon>}
                  ></Button>
                </Link>
              </a>
              <a
                href={"https://www.instagram.com/amal_p_mathews_2003/"}
                target="_blank"
                rel="noreferrer"
              >
                <Link>
                  <Button
                    variant={"ghost"}
                    colorScheme={"teal"}
                    leftIcon={<Icon as={BsInstagram}></Icon>}
                  ></Button>
                </Link>
              </a>
              <a
                href={"https://www.facebook.com/amalpullukottayil.mathew"}
                target="_blank"
                rel="noreferrer"
              >
                <Link>
                  <Button
                    variant={"ghost"}
                    colorScheme={"teal"}
                    leftIcon={<Icon as={BsFacebook}></Icon>}
                  ></Button>
                </Link>
              </a>
              <a
                href={"https://github.com/amalpmathews2003"}
                target="_blank"
                rel="noreferrer"
              >
                <Link>
                  <Button
                    variant={"ghost"}
                    colorScheme={"teal"}
                    leftIcon={<Icon as={AiOutlineTwitter}></Icon>}
                  ></Button>
                </Link>
              </a>
              <a
                href={"https://www.linkedin.com/in/amal-p-mathews/"}
                target="_blank"
                rel="noreferrer"
              >
                <Link>
                  <Button
                    variant={"ghost"}
                    colorScheme={"teal"}
                    leftIcon={<Icon as={AiFillLinkedin}></Icon>}
                  ></Button>
                </Link>
              </a>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
}
