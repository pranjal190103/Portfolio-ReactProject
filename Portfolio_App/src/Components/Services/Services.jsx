import React, { useContext } from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Report from './NanditaLearningReport.xlsx';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode= theme.state.darkMode;
  const transition={duration:2, type:'String'}
  return (
    <div className="Services" id='Services'>

        {/*left side*/ }
        <div className='awesome'>
            <span style={{color:darkMode? 'white':''}}>My Awesome</span>
            <span>Services</span>
            <spane>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Magni amet fuga corporis expedita!
                 <br/>
                 ispum is a simple dummy text of printing
            </spane>
         <a href={Report} download>
           <button className="button s-button">Download Report</button>
        </a>
        <div className='blur s-blur1' style={{background:"#ABF1FF94"}} >
        </div>
        </div>
        {/*right side*/}
        <div className='cards'>
          <motion.div 
          initial={{left:'25rem'}}
          whileInView={{left:'14rem'}}
          transition={transition}
          >
            <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma,Sketch,Adobe,,Adobe xd, Photoshop"}/>
          </motion.div>
          {/*second card*/}
          <motion.div 
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}>
            <Card
              emoji={Glasses}
              heading={"Developer"}
              detail={"Html, Css, Javascript, React"}
              />
          </motion.div>
          <motion.div 
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
          >
            <Card 
               emoji={Humble}
               heading={"UX/UI"}
               detail={"Lorem isump dummy text are usually used in special sections where"}
               />
          </motion.div>
         <div className="blur s-blur2" style={{background: "var(--purple"}}>

         </div>

        </div>
    </div>
  )
}

export default Services; 