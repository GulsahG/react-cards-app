import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Heading, Text } from '@chakra-ui/layout';

const Card = ({title, desc, image}) => {
  return (
    <Box 
      m={{base: "15vw 0 7.5vw 0", lg: "5vw 0"}} 
    >
      <Heading
        m="1vw 0"
        as="h1" 
        color="brand.700"
        fontSize={{base: "1.5rem", lg:"2.25rem"}}
      >
        Title: {title}
      </Heading>
      <Text
        m="1vw"
        fontSize={{base:"md", lg:"lg"}}
        textAlign="justify"
      >
        Description: <br/>{desc}
      </Text>
      <Image
        src={image}
        w={{base: "50vw", lg:"30vw"}}
        h={{base: "50vw", lg:"30vw"}}
        m={{base: "5vw auto", lg: "2.5vw auto"}}
        boxShadow="dark-lg"
      />
    </Box>
  )
}

export default Card;