import React from 'react'
import FourImages from '../Components/FourImages'
import EightLogo from '../Components/EightLogo';
import Twoguys from '../Components/Twoguys';
import Footer from '../Components/Footer';
import SliderComp from '../Components/Second-slider/SliderComp';
import Side from '../Components/First_Slider/Side';
import ThirdSlider from '../Components/Third_Slider/SliderComp';
import Sid from '../Components/Third_Slider/sid';
import Heading from '../Components/Heading Slider/heading';

const Home = () => {
  return (
         <>

     <div style={{display:"flex", gap:"25px"    }}>
      <Side></Side>
      <SliderComp></SliderComp>
      </div>

        <br/>
   
     <Heading></Heading>
     <br/>
     

    <div style={{display:"flex", gap:"25px"    }}>
      <Sid></Sid>
      <ThirdSlider></ThirdSlider>
      </div>


    <FourImages></FourImages>
    <EightLogo></EightLogo>
     <Twoguys></Twoguys>
    
     <Footer></Footer>
      <br></br>
      <br></br>
      <br></br>
      </>
  )
}

export default Home