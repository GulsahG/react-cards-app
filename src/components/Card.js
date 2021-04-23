import React from 'react';
import { Image } from '@chakra-ui/image';
import { Heading, Text } from '@chakra-ui/layout';

const Card = ({title, desc, image}) => {
  return (
    <div style={{margin: "40vw 0 0 0"}}>
      <Heading>
        {title}
      </Heading>
      <Text>
        {desc}
      </Text>
      <Image
        src={image}
        w="40vw"
        h="40vw"
        pos="absolute"
      />
    </div>
  )
}

export default Card;