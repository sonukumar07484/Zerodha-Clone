
import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Education from './Education';
import OpenAccounts from '../../OpenAccounts';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Pricing from './Pricing';

function HomePage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccounts/>
        <Footer/>
        </>
     );
}

export default HomePage;