import React, { useState } from 'react';
import BrowseImage from './BrowseImage';
import Card from './Card';

import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { Button } from '@chakra-ui/button';

const App = () => {
  const [title, setTitle] = useState('New title');
  const [desc, setDesc] = useState('New description');
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [currentCard, setCurrentCard] = useState([]);

  const handleCardChange = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setCurrentCard([title, desc, image]);
    setTitle('New title');
    setDesc('New description');
    setImage(null);
  }

  return (
  <>
    <form onSubmit={e => {handleCardChange(e)}}>
      <Input 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        size="lg"
        >
      </Input>
      <Textarea
        value={desc}
        onChange={e => setDesc(e.target.value)}
        size="lg"
      />
      <Button 
        type="submit"
      >
        Submit
      </Button>
      <BrowseImage uploadImage={image => setImage(image)} submitted={submitted}></BrowseImage>
    </form>
    <Card 
      title={currentCard[0]} 
      desc={currentCard[1]}
      image={currentCard[2]}
    >
    </Card>
  </>
  )
}

export default App;