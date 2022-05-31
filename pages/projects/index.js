import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Text,
  Center,
  Box,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import Layout from "@/components/article";
import { ProjectCard } from "@/components/projectCard";
import { ProjectPageData } from "@/components/data";
export default function ProjectIndex() {
  return (
    <Layout title={"Projects"}>
      <>
        <Center>
          <Heading as="h3" fontSize={20} mb={4}>
            Projects
          </Heading>
        </Center>
        <Box h={5}></Box>
        <Divider />
        <Divider />
        <Box h={16}></Box>
        <Center>
          <SimpleGrid columns={[1, 2, 3]}>
            {ProjectPageData.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </SimpleGrid>
        </Center>
      </>
    </Layout>
  );
}
