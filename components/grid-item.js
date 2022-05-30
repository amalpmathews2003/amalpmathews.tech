import NextLink from "next/link";
import Image from "next/image";
import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";

import { Global } from "@emotion/react";

export function GridItem({ children, href, title, thumbnail }) {
  return (
    <Box w={"100%"} align="center">
      <LinkBox cursor={"pointer"}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          loading="lazy"
        ></Image>
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
}

export function WorkGridItem({ children, link, title, thumbnail }) {
  return (
    <Box w={"100%"} align="center">
      <NextLink href={link} passHref>
        <LinkBox cursor={"pointer"}>
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={link}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  );
}

export function GridItemStyle() {
  return (
    <Global
      styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
    >
      {" "}
    </Global>
  );
}
