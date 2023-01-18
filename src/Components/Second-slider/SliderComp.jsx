// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// import data from "../db.json";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Box, Divider, Text } from "@chakra-ui/react";
import Card from "./Card";

const SliderComp = () => {

  let data = [ {
       
       
    "img": "https://diesel.gumlet.io/product/410345058007/665/410345058007_1_8805.webp?compress=true&q=70",
   
    "price": "14,999.00",
    
    "p-price 2": "(40% Off)",
    "title": "Black",
    "desc": "2019 D-STRUKT Slim Men Black Jeans"
    },
    {
   
    
   
    "img": "https://diesel.gumlet.io/product/410315359009/665/410315359009_1_7954.webp?compress=true&q=70",
   
    "price": "20,999.00",
    
    "p-price 2": "(30% Off)",
    "title": "Blue",
    "desc": "D-Krooley  Fit Men Blue JoggJeans"
    },
    {
   
   
    "img": "https://diesel.gumlet.io/product/410344983008/665/410344983008_1_5910.webp?compress=true&q=70",
    
    "price": "13,999.00",
   
    "p-price 2": "(30% Off)",
    "title": "Black/Dark Grey",
    "desc": " Skinny Fit Men Black Jeans"
    },
    {
   
    "img": "https://diesel.gumlet.io/product/410315140009/665/410315140009_1.jpg?compress=true&q=70",
  
    "price": "11,999.00",
    
    "p-price 2": "(40% Off)",
    "title": "Black",
    "desc": "2019 D-Strukt Slim Fit Men Black Jeans"
    },
    {
   
    
    "img": "https://diesel.gumlet.io/product/410345335010/665/410345335010_1_9935.webp?compress=true&q=70",
   
    "price": "19,999.00",
   
    "p-price 2": "(20% Off)",
    "title": "Green",
    "desc": "2019 D-STRUKT Slim Men Green Jeans"
    },
    {
   
    
    "img": "https://diesel.gumlet.io/product/410345266007/665/410345266007_1_5698.webp?compress=true&q=70",
   
    "price": "17,999.00",
    
    "p-price 2": "(40% Off)",
    "title": "Blue",
    "desc": "1995-SP2 Straight Men Blue Jeans"
    },
    {
   
   
    "img": "https://diesel.gumlet.io/product/410345123008/665/410345123008_1_1476.webp?compress=true&q=70",
    
    "price": "12,599.00",
    
    "p-price 2": "(30% Off)",
    "title": "Blue",
    "desc": "1979 SLEENKER Skinny Men Blue Jeans"
    },
    {
   
   
        "img": "https://diesel.gumlet.io/product/410345058007/665/410345058007_1_8805.webp?compress=true&q=70",
       
        "price": "14,999.00",
        
        "p-price 2": "(40% Off)",
        "title": "Black",
        "desc": "2019 D-STRUKT Slim Men Black Jeans"
        },
        {
       
        
       
        "img": "https://diesel.gumlet.io/product/410315359009/665/410315359009_1_7954.webp?compress=true&q=70",
       
        "price": "20,999.00",
        
        "p-price 2": "(30% Off)",
        "title": "Blue",
        "desc": "D-Krooley  Fit Men Blue JoggJeans"
        },
        {
       
       
        "img": "https://diesel.gumlet.io/product/410344983008/665/410344983008_1_5910.webp?compress=true&q=70",
        
        "price": "13,999.00",
      
        "p-price 2": "(30% Off)",
        "title": "Black/Dark Grey",
        "desc": "1979 SLEENKER Skinny Fit Men Black Jeans"
        },
        {
       
        "img": "https://diesel.gumlet.io/product/410315140009/665/410315140009_1.jpg?compress=true&q=70",
      
        "price": "11,999.00",
      
        "p-price 2": "(40% Off)",
        "title": "Black",
        "desc": "2019 D-Strukt Slim Fit Men Black Jeans"
        },
        {
       
        
        "img": "https://diesel.gumlet.io/product/410345335010/665/410345335010_1_9935.webp?compress=true&q=70",
       
        "price": "19,999.00",
       
        "p-price 2": "(20% Off)",
        "title": "Green",
        "desc": "2019 D-STRUKT Slim Men Green Jeans"
        },
        {
   
   
            "img": "https://diesel.gumlet.io/product/410345058007/665/410345058007_1_8805.webp?compress=true&q=70",
           
            "price": "14,999.00",
            
            "p-price 2": "(40% Off)",
            "title": "Black",
            "desc": "2019 D-STRUKT Slim Men Black Jeans"
            }
   ]





  const sliderData = data;
  return (
    <Box m={"auto"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} >
      <Box w={"fit-content"} borderBottom={"2px solid black"}>
        <Text fontSize='2xl'  as="b">HOT DEALS</Text>
      </Box>
      <Divider />
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          560: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          885: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1286: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {sliderData.map((el, id) => {
          return (
            <SwiperSlide key={id}>
              <Card key={id} obj={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default SliderComp;
