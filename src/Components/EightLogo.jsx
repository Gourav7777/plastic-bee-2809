import { SimpleGrid,Box,Image,Text } from '@chakra-ui/react'

 import React from 'react'
 
 const EightLogo = () => {
   return (
    <SimpleGrid columns={[1,2,4]} spacing={15} p={15} marginLeft={150}  fontWeight="bold" fontSize={18} >
    <Box w="110px"  >
  <Image src='https://diesel.gumlet.io/cms_images/1671614479icons-01.webp'  w="100%" />
  <Text>PERSONAL STYLING</Text>
    </Box>
    <Box w="110px" >
    <Image src='https://diesel.gumlet.io/cms_images/1671614498icons-02.webp' w="100%" />
    <Text>30 DAY FREE RETURN</Text>
    </Box>
    <Box w="110px" >
    <Image src='https://diesel.gumlet.io/cms_images/1671614517icons-03.webp' w="100%" />
    <Text>AUTHENTIC PRODUCTS</Text>
    </Box>
    <Box  w="110px">
    <Image src='https://diesel.gumlet.io/cms_images/1671614563icons-04.webp' w="100%" />
    <Text>FLEXIBLE & SECURE PAYMENTS</Text>
    </Box>
    

    <Box w="110px"  >
  <Image src='https://diesel.gumlet.io/cms_images/1671614575icons-05.webp' w="100%" />
  <Text>LIFETIME SUPPORT</Text>
    </Box>
    <Box  w="110px">
    <Image src='https://diesel.gumlet.io/cms_images/1671614585icons-06.webp' w="100%" />
    <Text>PRE - ORDER</Text>
    </Box>
    <Box  w="110px">
    <Image src='https://diesel.gumlet.io/cms_images/1671614595icons-07.webp'  w="100%"/>
    <Text>EXCLUSIVE OFFERS</Text>
    </Box>
    <Box w="110px" >
    <Image src='https://diesel.gumlet.io/cms_images/1671614606icons-08.webp' w="100%" />
    <Text>FREE SHIPPING</Text>
    </Box>
    
  </SimpleGrid>
   )
 }
 
 export default EightLogo