
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import logo from "./img/info.svg"
import instaicon from  "./img/instagram.png"
import qrcode from "./img/qrcode.png"
import whatsapp from "./img/whatsapp.png"
import bill from "./img/bill.png"
import avancar from "./img/avancar.png"
import voltar from "./img/voltar.png"
import {motion}  from 'framer-motion'
import image1 from "./img/1.png"
import image2 from "./img/2.png"
import image3 from "./img/3.png"
import image4 from "./img/4.jpg"


const images = [image1, image2, image3, image4]


function App() {
  const carousel = useRef();
  const [width, setwidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current.offsetwidth)
    setwidth(carousel.current?.scrollWidth - carousel.current.offsetwidth)
  },[])

  return (
    

    <div className="App">



<motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
          <motion.div className="inner"
          drag="x"
          dragConstraints={{right:0, left: -2234}}
          >
            {images.map(image => (
              <motion.div className="item" key= {image}>
                <img src={image} alt= "text alt" />
                </motion.div>


            ))}

          </motion.div>

        </motion.div>
        <img src= {bill} className="bill" /> 
        <img src= {avancar} className="avancar" /> 
        <img src= {voltar} className="voltar" /> 

      
      <div className="Main">
        <img src= {logo} className="logo" /> 
        <textarea
        className="Inputcontact" id= "contact"  />
        <h1 className="Title">Deixe Sua Opinião </h1>
        <button type="button" class= "buttonEnviar" id="enviar" >Enviar</button>
        <img src= {instaicon} className="instaicon" /> 
        <img src= {qrcode} className="qrcode" /> 
        <img src= {whatsapp} className="whatsapp" /> 
  
  
        
  
          </div>
        
    </div>
  );
}

export default App;
