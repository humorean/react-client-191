import React from 'react';
import Home from './Home';
import History from './History';
import {BrowserRouter,Route, Link} from 'react-router-dom';

import Navigation from './header/Navigation';

class App extends React.Component{
  render(){
    return(
      <div>
        <div className='header'>
          <div className='logo'></div>
        </div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Route path='/' exact component={Home} />
            <Route path='/history' component={History} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;