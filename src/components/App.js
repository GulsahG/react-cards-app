import React, { useState } from 'react';
import BrowseImage from './BrowseImage';
import Card from './Card';
import uploadImg from '../img/uploadImg.png';

import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Divider } from '@chakra-ui/layout';

const App = () => {
  const [title, setTitle] = useState('New title');
  const [desc, setDesc] = useState('New description');
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [currentCard, setCurrentCard] = useState(['', '', null]);

  // handles the form submit
  const handleCardChange = (e) => {
    e.preventDefault(); // stops the form from refreshing the page
    setSubmitted(true); // equals the submitted bool to true
    setCurrentCard([title, desc, image]); // changes the current card
    setTitle('New title'); // gets the old title val back
    setDesc('New description'); // gets the old desc val back
    setImage(uploadImg); // gets the old img val back
  }

  return (
  <Box 
    w={{base: "61vw", lg: "38vw"}} 
    m={{base: "7.5vw auto", lg:"2.5vw auto"}}
  >
    <Text
      p={{base: "2vw 1.85vw", lg: "1.85vw"}}
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
    <form 
      onSubmit={e => {handleCardChange(e)}}
      style={{border: "2px solid black", borderRadius:"20px", 
      position:"relative", marginTop:"-1.25vw", zIndex:"1", 
      backgroundColor: "white", padding:"1.5vw 0"}}
    >
      <Input 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        size="lg"
        fontSize={{base:"xl", lg:"2xl"}}
        fontWeight="bold"
        color="#bc5935"
        border="none"
        p="0 1.5vw"
        h="fit-content"
      >
      </Input>
      <Textarea
        value={desc}
        onChange={e => setDesc(e.target.value)}
        size="lg"
        h="15vw"
        fontSize={{base:"lg", lg:"xl"}}
        border="none"
        p="1.5vw"
      />
      <BrowseImage uploadImage={image => setImage(image)} submitted={submitted}></BrowseImage>
      <Button 
        type="submit"
        colorScheme="blackAlpha"
        m={{base: "3vw 0 0 46vw", md: "3vw 0 0 50vw", lg:"2vw 0 0 32.5vw"}}
        boxShadow="md"
        _hover={{bg: "green"}}
        h={{base: "8vw", lg: "4vw"}}
        w={{base: "7.5vw", lg: "3.5vw"}}
      />
    </form>
    <Divider 
      orientation="horizontal" 
      bg="gray"
      h="10px"
      w={{base: "91vw", lg: "55vw"}}
      m={{base: "15vw -15vw", lg: "5vw -8.5vw"}}
    />
    <Card 
      title={currentCard[0]} 
      desc={currentCard[1]}
      image={currentCard[2]}
    >
    </Card>
  </Box>
  );
}

export default App;