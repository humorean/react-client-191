import React from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom';

import '../css/App.css';


import Home from './Home';
import History from './History';
import Navigation from './header/Navigation';
import Gallery from './Gallery';
import Career from './Career';
import Contact from './Contact';
import Footer from './Footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <div className='header'>
          <div className='logo'></div>
        </div>
        <BrowserRouter>
          <div className='browser-router'>
            <Navigation />
            <div className='routes-container'>
              <Route path='/' exact component={Home} />
              <Route path='/history' component={History} />
              <Route path='/gallery' component={Gallery} />
              <Route path='/career' component={Career} />
              <Route path='/contact' component={Contact} />
            </div>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App;