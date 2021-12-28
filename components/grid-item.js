import NextLink from 'next/link'
import Image from 'next/image'
import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
<<<<<<< HEAD
import { Global } from '@emotion/react'
=======

>>>>>>> e2929ba4bfcdb653c7e2310a0a3c6de1b45d8423

export function GridItem({ children, href, title, thumbnail }) {
      return (
            <Box w={"100%"} align="center">
                  <LinkBox cursor={"pointer"}>
                        <Image src={thumbnail}
                              alt={title}
                              className='grid-item-thumbnail'
                              loading='lazy'
                        ></Image>
                        <LinkOverlay
                              href={href} target="_blank"
                        >
                              <Text mt={2}>{title}</Text>
                        </LinkOverlay>
                        <Text fontSize={14}>{children}</Text>
                  </LinkBox>
            </Box>
      )
}

export  function WorkGridItem({ children, id, title, thumbnail }) {
      return (
            <Box w={"100%"} align="center">
                  <NextLink href={`/works/${id}`}>
                        <LinkBox cursor={"pointer"}>
                              <Image
                                    src={thumbnail}
                                    alt={title}
                                    className='grid-item-thumbnail'
                                    placeholder="blur"
                              />
                              <LinkOverlay href={`/works/${id}`}>
                                    <Text mt={2} fontSize={20}>
                                          {title}
                                    </Text>
                              </LinkOverlay>
                              <Text fontSize={14} >
                                    {children}
                              </Text>
                        </LinkBox>
                  </NextLink>
            </Box>
      )
}

export function GridItemStyle(){
<<<<<<< HEAD
      <Global
      styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}> </Global>
=======
      <Global>    </Global>
>>>>>>> e2929ba4bfcdb653c7e2310a0a3c6de1b45d8423
}