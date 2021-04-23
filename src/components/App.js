import React, { useState } from 'react';
import BrowseImage from './BrowseImage';
import Card from './Card';
import uploadImg from '../img/uploadImg.png';
import emptyImg from '../img/emptyImg.png';

import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';

const App = () => {
  const [title, setTitle] = useState('New title');
  const [desc, setDesc] = useState('New description');
  const [image, setImage] = useState(emptyImg);
  const [submitted, setSubmitted] = useState(false);
  const [currentCard, setCurrentCard] = useState(['', '', emptyImg]);

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
    w={{base: "60vw", lg:"40vw"}} 
    m={{base: "7.5vw auto", lg:"2.5vw auto"}}
  >
    <form onSubmit={e => {handleCardChange(e)}}>
      <Input 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        size="lg"
        fontSize={{base:"md", lg:"lg"}}
        m="1vw 0"
        boxShadow= "3px 4px 6px 0px rgba(126,165,248,0.65)"
        >
      </Input>
      <Textarea
        value={desc}
        onChange={e => setDesc(e.target.value)}
        size="lg"
        fontSize={{base:"md", lg:"lg"}}
        m="1vw 0"
        boxShadow= "3px 4px 6px 0px rgba(126,165,248,0.65)"
      />
      <BrowseImage uploadImage={image => setImage(image)} submitted={submitted}></BrowseImage>
      <Button 
        type="submit"
        bg="brand.400"
        color="white"
        float="right"
        _hover={{bg: "brand.500"}}
        boxShadow="md"
        h={{base: "2rem", lg: "2.5rem"}}
      >
        Submit
      </Button>
    </form>
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