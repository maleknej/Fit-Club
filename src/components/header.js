import '../App.css';
import React from 'react';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter'
function Hero(){

  const transition = {type:"spring", duration:3}

  
    return(
        <div className='hero'>
          <div className='blur hero-blur'></div>
          <div className='left-h'>
            <header className='header'>
              <img src='/assets/logo.png' className='logo-img'></img>
              <ul className='header-list'>
                <a href="#"><li>Home</li></a>      
                <a href="#"><li>Programs</li></a>    
                <a href="#"><li>Why us</li></a> 
                <a href="#"><li>Plans</li></a>
                <a href="#"><li>Testimonials</li></a>
              </ul>
            </header>
            <div className='best-ad'>
              {/* orange circle */}
              <motion.div
              initial={{left:'238px'}}
              whileInView={{left:"8px"}}
              transition={transition}
              >
                
              </motion.div>
              <span>THE BEST FITNESS CLUB IN THE TOWN</span>
            </div>
            {/* Hero texts */}
            <div className='hero-text'>
                <span className='shape-style'>SHAPE</span>
                <span> YOUR</span>
              
              <div>
                <span>Ideal Body</span>
              </div>
              <div>
                <span className='hero-text-line'>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
              </div>
            </div>
            <div className='figures'>
              <div>
                <div><NumberCounter end={140} start={100} delay="4" preFix="+" /></div>
                <span>expert coaches</span>
              </div>
              <div>
                <div><NumberCounter end={195} start={140} delay="4" preFix="+" /></div>
                <span>Members joined</span>
              </div>
              <div>
                <div><NumberCounter end={50} start={20} delay="4" preFix="+" /></div>
                <span>fitness programs</span>
              </div>
            </div>
            <div className='hero-buttons'>
            <button className='leftbtn'>Get Started</button>
            <button className='rightbtn'>Learn More</button>
            </div>
          </div>
          <div className='right-h'>
            <button className='right-h-button'>Join Now</button>
  
            <motion.div className='heart-rate' transition={transition} initial={{right:'-1rem'}}
              whileInView={{right:"4rem"}}>
              <img src='/assets/heart.png'/>
              <span>Heart Rate</span>
              <span>116 bpm</span>
            </motion.div>
  
            <img src='/assets/hero_image.png' className='hero-img'/>
            <motion.img src='/assets/hero_image_back.png' className='hero-img-back' transition={transition} initial={{right:'11rem'}}
              whileInView={{right:"20rem"}} />
  
            <motion.div className='cal' transition={transition} initial={{right:'37rem'}}
              whileInView={{right:"28rem"}}>
              <img src='/assets/calories.png' />
              <div>
              <span>Calories burned</span>
              <span>220 kcal</span>
              </div>
            </motion.div>
          </div>
          
        </div>
    );
  }



export default Hero;