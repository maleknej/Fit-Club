import {plansData} from '../data/plansData'
import '../App.css';
import React from 'react';
function Plan(props){
  return(
    <div className='plan'>
      {props.icon}
      <span>{props.name}</span>
      <span>${props.price}</span>
      <div className='features'>
        <div className='feature'>
          <img src='/assets/whiteTick.png' />
          <span>{props.features[0]}</span>
        </div>
        <div className='feature'>
        <img src='/assets/whiteTick.png' />
        <span>{props.features[1]}</span>
        </div>
        <div className='feature'>
        <img src='/assets/whiteTick.png' />
        <span>{props.features[2]}</span>
        </div>
      </div>
      <div>
        <span>See more benefits {'->'}</span>
      </div>
      <button className='plan-btn'>Join now</button>
    </div>
  );
}


function PlansContainer(){
  const plans = plansData.map(plan =>{
    return <Plan 
    {...plan}
    />
  })
  return(
    <div className='plans-container'>
      <div className='blur hero-blur-l'></div>
      <div className='blur hero-blur-r'></div>
    <div className='container-header'>
      <span>Ready to Start </span>
      <span> Your Journey </span>
      <span> now withus</span>
    </div>
    <div className='plans'>
      {plans}
    </div>
  </div>
  );
}

export default PlansContainer;