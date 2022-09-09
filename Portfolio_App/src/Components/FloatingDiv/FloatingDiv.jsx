import React from 'react';
import './FloatingDiv.css';
import { motion } from 'framer-motion';
import { Transition } from 'framer-motion';


const FloatingDiv= ({image , txt1,txt2}) => {
  
  return (
    <motion.div 
    initial={{ top: "-4%", left: "74%" }}
    whileInView={{ left: "68%" }}
    transition={{duration: 3, type: "Spring"}}
    style={{ top: "-4%", left: "68%" }}
       className="floatingdiv">
        <img src={image} alt="" />
        <span>
            {txt1}
            <br />
            {txt2}
        </span>
    </motion.div>
  )
}

export default FloatingDiv