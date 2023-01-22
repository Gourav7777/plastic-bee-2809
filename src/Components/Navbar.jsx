import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import {
  SearchIcon,
  ChatIcon,
  PhoneIcon,
  QuestionOutlineIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          height: "40px",
          backgroundColor: "#ff0000",
          textAlign: "center",
          color: "white",
          textDecoration: "underline",
          fontSize: "18px",
          margin: "auto",
          padding: "5px",
        }}
      >
        TRACK YOUR ORDERS & RETURNS HERE USE CODE EXTRA 10% OFF
      </div>
      <br />

      <Flex justifyContent={"space-around"} alignItems={"center"} gap={"8"}>
        <Flex
          justifyContent={"space-evenly"}
          fontSize={16}
          fontWeight={"bold"}
          gap={"5"}
        >
          <Link to="/">HOME</Link>
          <Link to="/men">MEN</Link>
          <Link to="/women">WOMEN</Link>
          <Link to="/cart">MYCART</Link>
          <Link
            to="/login"
            style={{
              border: "1px solid #ff0000",
              color: "#ff0000",
              padding: "2px",
              marginTop: "-2px",
            }}
          >
            Login
          </Link>
        </Flex>

        <Flex>
          <img
            src="https://dieselindia.com/_nuxt/img/logo.47d3efc.svg"
            alt="err"
          />
        </Flex>

        <Flex cursor={"pointer"} w={"25%"}>
          <Flex
            w={"20%"}
            border="1px"
            borderColor="#ff0000"
            justifyContent={"center"}
          >
            {
              <SearchIcon
                color="red.500"
                h={25}
                marginTop={2}
                w={25}
              ></SearchIcon>
            }
          </Flex>

          <Flex
            w={"20%"}
            border="1px"
            borderColor="#ff0000"
            justifyContent={"center"}
          >
            {
              <QuestionOutlineIcon
                marginTop={2}
                color="red.500"
                h={25}
                w={25}
              ></QuestionOutlineIcon>
            }
          </Flex>

          <Flex
            w={"20%"}
            border="1px"
            borderColor="#ff0000"
            justifyContent={"center"}
          >
            {
              <HamburgerIcon
                marginTop={2}
                h={25}
                w={25}
                color="red.500"
              ></HamburgerIcon>
            }
          </Flex>

          <Flex
            w={"20%"}
            border="1px"
            borderColor="#ff0000"
            justifyContent={"center"}
          >
            {
              <PhoneIcon
                marginTop={2}
                h={25}
                w={25}
                color="red.500"
              ></PhoneIcon>
            }
          </Flex>

          <Flex
            w={"20%"}
            border="1px"
            borderColor="#ff0000"
            justifyContent={"center"}
          >
            {<ChatIcon marginTop={2} h={25} w={25} color="red.500"></ChatIcon>}
          </Flex>
        </Flex>
      </Flex>

      <br></br>

      {/* <div style={{backgroundImage:`url("https://diesel.gumlet.io/banner/1672927619Banner_d.webp?compress=true&q=70")`,width:"100%",height:"590px",border:"0px solid black"}}  >

      

      </div> */}

      {/* <Background></Background> */}
    </>
  );
};

export default Navbar;
