
import './App.css';
import Navbar from './Components/Navbar';
import Allroutes from './Components/Allroutes';
import Imagecarousel from './Components/First_Slider/Imagecarousel';
import SliderComp from './Components/Second-slider/SliderComp';
import Side from './Components/First_Slider/Side';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Allroutes></Allroutes>

    
      <Imagecarousel></Imagecarousel>

<div style={{display:"flex", gap:"25px"    }}>
      <Side></Side>
      <SliderComp></SliderComp>
</div>
     </div>

    
  );
}

export default App;
