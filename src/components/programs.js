import '../App.css';
import React from 'react';
import { programsData } from '../data/programsData';


function Categories(props){
    return(
      <div className='category'>
        {props.image}
        <span>{props.heading}</span>
        <span>{props.details}</span>
        <div className='programs-join'>
          <span>Join Now</span>
          <img src="/assets/rightArrow.png" />
        </div>
      </div>
    )
  }
  function Programs(){
    const categories = programsData.map(category =>{
      return <Categories
      {...category}
      />
      
    })
    return(
      <div className='programs'>
        <div className='programs-header'>
          <span>explore our </span>
          <span> programs </span>
          <span> to shape you</span>
        </div>
        <div className='programs-categories'>
        {categories}
        
        </div>
      </div>
    );
  }

  export default Programs;