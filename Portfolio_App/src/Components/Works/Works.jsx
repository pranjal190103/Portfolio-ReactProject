import React, { useContext } from 'react';
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import '../../App.css'
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Works = () => {
    const theme = useContext(themeContext);
  const darkMode= theme.state.darkMode;
  return (
    <div className="works">
        <div className='awesome'>
            <span style={{color:darkMode?'white':''}}>Works For All These</span>
            <span>Brands & Clients</span>
            <spane>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Magni amet fuga corporis expedita!
                 <br/>
                 ispum is a simple dummy text of printing
                 <br/>
                 isum is a dummy text of printing.
                 <br />
                 Lorem isum is simply a dummy text.
            </spane>
           <button className="button s-button">Hire me</button>
        
        <div className='blur s-blur1' style={{background:"#ABF1FF94", left:'-18rem'}} >
        </div>
        </div>

        {/* right side */}
        <div className="w-right">
            <motion.div 
             initial={{rotate: 45}}
             whileInView={{rotate:0}}
             viewport={{margin: '-40px'}}
             transition={{duration:3.5, type:'spring'}}
             className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="Upwork" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="Fiverr" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="Amazon" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="Shopify" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="Facbook" />
                </div>
            </motion.div>
            {/* background circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>  )
    // https://prod-streaming-video-msn-com.akamaized.net/0b927d99-e38a-4f51-8d1a-598fd4d6ee97/3493c85c-f35a-488f-9a8f-633e747fb141.mp4(video)
}

export default Works