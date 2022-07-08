import './App.css';
import React from 'react';
import Hero from './components/header';
import Programs from './components/programs'
import Reasons from './components/reasons';
import PlansContainer from './components/plansContainer';
import Testimonials from './components/testimonials';
import Join from './components/join';
import Footer from './components/footer'


function App() {

  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <PlansContainer/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
