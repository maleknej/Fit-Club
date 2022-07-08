import '../App.css';
import React from 'react';



function Reasons(){
    return(
      <div className='reasons'>
      <div className='reasons-left'>
        <img src="/assets/image1.png"/>
        <img src="/assets/image2.png"/>
        <img src="/assets/image3.png"/>
        <img src="/assets/image4.png"/>
      </div>
      <div className='reasons-right'>
          <span>Some reasons</span>
          <div>
            <span className='stroke-text'>Why </span>
            <span>choose us?</span>
          </div>
          <div className='details-r'>
            <div>
              <img src='/assets/tick.png'/>
              <span>over 140+ expert coachs</span>
            </div>
            <div>
            <img src='/assets/tick.png'/>
            <span>train smarter and faster than before</span>
            </div>
            <div>
            <img src='/assets/tick.png'/>
            <span>1 free program for new member</span>
            </div>
            <div>
            <img src='/assets/tick.png'/>
            <span>reliable partners</span>
            </div>
            <span className='partners-text'>Our Partners</span>
            <div className='partners'>
              <img src="/assets/nb.png"/>
              <img src="/assets/adidas.png"/>
              <img src="/assets/nike.png"/>
            </div>
          </div>
        </div>  
      </div>
    );
  }

  export default Reasons;