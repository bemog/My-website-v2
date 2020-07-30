import React from 'react';
import '../scss/HomePage.scss';

const HomePage = () => {
  return (
    <div className='main home'>
      <h1 className='home__welcome-text'>
        Welcome,
        <br />
        I am <span className='home__name-mark'>Bartek Mogielnicki</span>,
        <br />
        <span className='home__title-text'></span>
      </h1>
    </div>
  )
}

export default HomePage;