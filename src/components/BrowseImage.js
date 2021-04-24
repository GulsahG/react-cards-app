import React, { useRef, useState, useEffect } from 'react';
import uploadImg from '../img/uploadImg.png';

import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
import { Box, Flex } from '@chakra-ui/layout';

const BrowseImage = ({ uploadImage, submitted }) => {
  const [newImage, setNewImage] = useState(uploadImg);
  const imageUploader = useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setNewImage(e.target.result); // sets the img to the found file
        uploadImage(e.target.result); // gives the img prop to parent component
      };
      reader.readAsDataURL(file);
    }
  };
  
  // when submitted gets the old img val back
  useEffect(() => {
    setNewImage(uploadImg); 
  }, [submitted])

  return (
    <Flex
      alignItems="start"
      justifyContent="start"
    >
      <Input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <Box pos="relative"
      onClick={() => imageUploader.current.click()}>
        <Image
          src={newImage}
          w={{base: "58vw", lg:"35vw"}}
          h={{base: "54vw", lg: "32.5vw"}}
          m="2.5vw 1.25vw 0 1.25vw"
        />
      </Box>
    </Flex>
  );
}

export default BrowseImage;  
  