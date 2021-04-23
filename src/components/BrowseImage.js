import React, { useRef, useState, useEffect } from 'react';
import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
import { Flex, Text } from '@chakra-ui/layout';
import { AddIcon } from '@chakra-ui/icons';

const BrowseImage = ({ uploadImage, submitted }) => {
  const [newImage, setNewImage] = useState(null);
  const imageUploader = useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setNewImage(e.target.result);
        uploadImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setNewImage(null);
  }, [submitted])

  return (
    <Flex
      alignItems="start"
      justifyContent="start"
      w="50%"
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
      <div onClick={() => imageUploader.current.click()}>
        <AddIcon w={6} h={6} m="1vw"/>
        <Image
          src={newImage}
          w="40vw"
          h="40vw"
          pos="absolute"
        />
      </div>
      <Text m="1vw 0">Click to upload image</Text>
    </Flex>
  );
}

export default BrowseImage;  
  