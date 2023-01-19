import React from 'react'
import { SimpleGrid,Box,Image } from '@chakra-ui/react'
const FourImages = () => {
  return (
    <SimpleGrid columns={[1,2]} spacing={10} p={15}>
  <Box  >
<Image src='https://diesel.gumlet.io/cms_images/1673434124FW22%20DROP1-2-3%20+%20HIGH%20SUMMER%20OPC_EXTRA_SUPER%20LOGO%20WINTER%20PUFFER_16_9_JPEG_72&300dpi_sRGB_D1_19_DROP2%20THE%20SUPER%20LOGO_M_026_sRGB.webp?compress=true&q=70' />
  </Box>
  <Box  >
  <Image src='https://diesel.gumlet.io/cms_images/1666868060Untitled-2-03.webp?compress=true&q=70' />
  </Box>
  <Box  >
  <Image src='https://diesel.gumlet.io/cms_images/1673435887FW22%20DROP1-2-3%20+%20HIGH%20SUMMER%20OPC_HIGH%20SUMMER_16_9_JPEG_300dpi_D2_48_HIGHSUMMER_M_001_B_16_9_sRGB.webp?compress=true&q=70' />
  </Box>
  <Box  >
  <Image src='https://diesel.gumlet.io/cms_images/1673434905FW22%20DROP1-2-3%20+%20HIGH%20SUMMER%20OPC_DROP%203_WATCHES_16_9_JPEG_72&300dpi_sRGB_img22430347%20LANDSCAPE%20.webp?compress=true&q=70' />
  </Box>
  
</SimpleGrid>
  )
}

export default FourImages