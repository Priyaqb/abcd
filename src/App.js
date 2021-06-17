import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages';
import Details from './Pages/Details/Details';
import SongList from './Pages/Songs/SongList';
import SongDetails from './Pages/Songs/SongDetails';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Router>
            <div className="wrapper-container">
              <Header />
              <div className="wrapper-content">
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/details' component={Details} />
                    <Route path='/song-list' component={SongList} />
                    <Route path='/song-details' component={SongDetails} />
                </Switch>
              </div>
              <Footer />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
