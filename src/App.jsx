import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/header/header'
import './App.css';

function App() {
   return (
     <div className="App">
        <Header />
        <Switch>
           <Route exact path='/' component={Homepage} />
           <Route path='/shop' component={ShopPage} />
        </Switch>
     </div>
   );
}

export default App;
