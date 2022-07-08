import '../App.css';
import React from 'react';



function Join(){
    return(
      <div className="join">
        <div className='join-l'>
          <hr></hr>
          <div>
            <span className="stroke-text">Ready to </span>
            <span >Level up</span>
          </div>
          <div>
            <span>Your body </span>
            <span className="stroke-text">with us?</span>
          </div>
        </div>
        <div className='join-r'>
          <form>
            <input className='join-input' type="email" name="user_email" placeholder="Enter your email address here..."/>
            <button>Join now</button>
          </form>
        </div>
      </div>
      
    );
  }


  export default Join;