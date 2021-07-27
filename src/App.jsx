import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import SignPage from './pages/Sign/sign-page';
import Header from './components/header/header'

import { auth } from './firebase/firebase';

import './App.css';

class App extends React.Component {
   constructor() {
      super();

      this.state = {
         currentUser: null
      }
   }

   unsubscribeFromAuth = null;

   componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
         this.setState({ currentUser: user });
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div className="App">
            <Header currentUser={this.state.currentUser} />
            <Switch>
               <Route exact path='/' component={Homepage} />
               <Route path='/shop' component={ShopPage} />
               <Route path='/signin' component={SignPage} />
               <Route path='/signup' component={SignPage} />
            </Switch>
         </div>
      );
   }
}

export default App;
