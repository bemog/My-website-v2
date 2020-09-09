import React, { Component } from 'react';
import '../scss/HomePage.scss';

class HomePage extends Component {
  state = {
    titleText: '',
  };

  render() {
    return (
      <div className="main home">
        <h1 className="home__welcome-text">
          Welcome,
          <br />I am <span className="home__name mark">Bartek Mogielnicki</span>
          ,
          <br />
          <span className="home__title-text">
            former mechanical constructor,
          </span>
          <span className="home__title-text-end">
            future Front-End Developer.
          </span>
        </h1>
      </div>
    );
  }
}

export default HomePage;
