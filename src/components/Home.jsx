import React from 'react';
import Second from '../Pages/SecondSection';
import Header from '../Pages/Header';
import Footer from './Footer';
import FirstSection from '../Pages/FirstSection';

function Home() {
  return (
    <div>
      <Header/>
      <FirstSection/>
      <Second/>
      <Footer/>
    </div>
  );
}

export default Home;
