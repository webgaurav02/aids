import React from 'react';
import Navbar from './components/navbar';
import Logos from './components/logos';
import Helpline from './components/helpline';
import Slider from './components/slider';
import HivTest from './components/hivtest';
import Map from './components/map';
import Activities  from './components/activities';
import About from './components/about';
// import Nbtc from './components/nbtc';
import Indialogos from './components/indialogos';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Logos/>
      <Slider/>
      <Helpline/>
      <HivTest/>
      <Map/>
      <Activities/>
      <About/>
      {/* <Nbtc/> */}
      <Indialogos/>
    </div>
  )
}

export default page