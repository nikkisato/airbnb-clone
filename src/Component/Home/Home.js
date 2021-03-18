import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className='home__section'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
