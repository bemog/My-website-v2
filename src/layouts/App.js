import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navigation';
import Main from './Main';
import '../scss/App.scss';

class App extends Component {
  state = {
    showMenu: 'false',
  }

  handleShowMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    return (
      <Router>
        <>
          <header>
            {<Navigation
              showMenu={this.state.showMenu}
              clicked={this.handleShowMenu} />}
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