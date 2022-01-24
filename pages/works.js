import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Text,
} from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Section from "@/components/section";
import tathvaImg from "../public/images/tathva.webp";
import Layout from "@/components/article";
export default function Works() {
  return (
    <Layout title={"Works"}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              link="https://tathva.org"
              title={"Tathva"}
              thumbnail={tathvaImg}
            >
              <Text>Lorem</Text>
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              link="https://tathva.org"
              title={"Tathva"}
              thumbnail={tathvaImg}
            >
              <Text>Lorem</Text>
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              link="https://tathva.org"
              title={"Tathva"}
              thumbnail={tathvaImg}
            >
              <Text>Lorem</Text>
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              link="https://tathva.org"
              title={"Tathva"}
              thumbnail={tathvaImg}
            >
              <Text>Lorem</Text>
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              link="https://tathva.org"
              title={"Tathva"}
              thumbnail={tathvaImg}
            >
              <Text>Lorem</Text>
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              link="https://tathva.org"
              title={"tathva"}
              thumbnail={tathvaImg}
            >
              <Text>Lorem</Text>
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
