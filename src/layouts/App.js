import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navigation';
import Main from './Main';
import '../scss/App.scss';

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <>
          <header>
            {<Navigation />}
          </header>
          <main>
            {<Main />}
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      </Router>
    );
  }
}

export default App;