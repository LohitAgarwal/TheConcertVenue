import React from 'react';
import './resources/styles.css'
import { Element } from 'react-scroll';

import Header from './components/Header_footer/Header'
import Featured from './components/Featured';
import VenueNfo from './components/venuNfo'
import Highlight from './components/Highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/Header_footer/Footer'

function App() {
  return (
    <div className="App" style={{ height:"1500px"}}>
    <Header/>

    <Element name="featured">
      <Featured/>
    </Element>

    <Element name="venuenfo">
      <VenueNfo/>
    </Element>
    
    <Element name="highlights">
      <Highlight/>
    </Element>
    
    <Element name="pricing">
      <Pricing/>
    </Element>

    <Element name="location">
      <Location/>
    </Element>
    
    <Footer/>
  </div>
  );
}

export default App;
