import React from 'react';
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer';
import TrainSection from '../components/TrainSection';






const Training = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='YOLCULUK' text='Uzay & yolcuğu'/>
        <TrainSection/>
        <Footer/>

    </div>
  )
}

export default Training