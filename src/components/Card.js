import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Text } from '@chakra-ui/layout';

const Card = ({title, desc, image}) => {
  return (
    <Box 
      m={{base: "15vw 0 7.5vw 0", lg: "5vw 0"}}
      w={{base: "61vw", lg:"38vw"}}  
    >
      <Text
        p={{base: "2vw 1.5vw", lg: "1.5vw"}}
        fontSize={{base:"lg", lg:"xl"}}
        w="50%"
        border="2px solid black"
        borderBottomWidth="0"
        borderTopRadius="20px"
        pos="relative"
        zIndex="-1"
      >
        New Title
      </Text>
      <Box 
        style={{border: "2px solid black", borderRadius:"20px", 
        position:"relative", marginTop:"-1.25vw", zIndex:"1", 
        backgroundColor: "white", padding:"1.5vw 0"}}
      >
        <Text
          m="0 1.5vw"
          size="lg"
          fontSize={{base:"xl", lg:"2xl"}}
          fontWeight="bold"
          color="#bc5935"
        >
          {title}
        </Text>
        <Text
          m="1vw 1.5vw"
          minH="15vw"
          fontSize={{base:"lg", lg:"xl"}}
        >
          {desc}
        </Text>
        <Image
          src={image}
          w={{base: "58vw", lg:"35vw"}}
          h={{base: "54vw", lg: "32.5vw"}}
          m="2.5vw auto 2.5vw auto"
          bg="lightgray"
        />
      </Box>
    </Box>
  )
}

export default Card;