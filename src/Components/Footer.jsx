import { Flex,Button } from '@chakra-ui/react'
import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  
  } from '@chakra-ui/react'

  import { ChevronDownIcon } from '@chakra-ui/icons'
const Footer = () => {
  return (
    <Flex justifyContent="space-evenly">
   
   <Menu  >
  <MenuButton as={Button} rightIcon={<ChevronDownIcon   />}  colorScheme='green'  >
    HELP
  </MenuButton>
  <MenuList >
    <MenuItem >Order Status</MenuItem>
    <MenuItem>Delivery</MenuItem>
    <MenuItem>Returns</MenuItem>
    <MenuItem>Contact Us</MenuItem>
    <MenuItem>View All</MenuItem>
  </MenuList>
   </Menu>

   <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='blue' >
  COOKIE POLICY & TERMS
  </MenuButton>
  <MenuList>
    <MenuItem>Privacy Policy</MenuItem>
    <MenuItem>Shipping & Delivery Policy</MenuItem>
    <MenuItem>Terms & Conditions</MenuItem>
    <MenuItem>Returns & Refund Policy</MenuItem>
    <MenuItem>Fees & Payment Policy</MenuItem>
  </MenuList>
   </Menu>


   <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='red'  >
  WORLD OF DIESEL
  </MenuButton>
  <MenuList>
    <MenuItem>About Diesel</MenuItem>
    <MenuItem>For Responsible Living</MenuItem>
    <MenuItem>Only the Brave Foundation</MenuItem>
   
  </MenuList>
   </Menu>

   <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='yellow' >
  STORE LOCATOR
  </MenuButton>
  <MenuList>
    
    <MenuItem>Attend a Workshop</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Delete</MenuItem>
  </MenuList>
   </Menu>


    </Flex>
      )
}

export default Footer


