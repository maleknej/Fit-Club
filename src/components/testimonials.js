import { testimonialsData } from '../data/testimonialsData';
import '../App.css';
import React from 'react';
import {motion} from 'framer-motion';
function Testimonials(){

  const [selected, setSelected] = React.useState(0);
  const tLen = testimonialsData.length;
  const transition = {type:"spring", duration:3}

  return(
    <div className='testimonials'>
      <div className='left-t'>
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>
        <motion.span
        key={selected}
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:100}}
        transition={transition}
        >{testimonialsData[selected].review}</motion.span>
        <span>
          <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name}</span> - {testimonialsData[selected].status}
        </span>
      </div>
      <div className='right-t'>

        <motion.div className='border1' 
              initial={{opacity:0,x:-100}}
              whileInView={{opacity:1,x:0}}
              transition={{...transition, duration:2}}></motion.div>
        <motion.div className='border2' 
              initial={{opacity:0,x:100}}
              whileInView={{opacity:1,x:0}}
              transition={{...transition, duration:2}}></motion.div>

        <motion.img 
        key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}
        src={testimonialsData[selected].image}/>


        <div className='arrow'>
        <img src='/assets/leftArrow.png' onClick={()=>{
          selected===0?setSelected(tLen-1):setSelected((prev)=>prev-1)
        }}/>
        <img src='/assets/rightArrow.png'onClick={()=>{
          selected===tLen-1?setSelected(0):setSelected((prev)=>prev+1)
        }}/>
        </div>  
      </div>
    </div>
  );
}

export default Testimonials;