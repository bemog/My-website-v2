import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../scss/App.scss';
import Footer from './Footer';
import Navigation from './Navigation';
import Page from './Page';

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
            {<Page />}
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