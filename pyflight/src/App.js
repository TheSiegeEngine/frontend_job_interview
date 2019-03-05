import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import BookFlight from './BookFlight'
import ListFlights from './ListFlights'
import Footer from './Footer';

let App = () => (
  <div>
    <Header />
    <Switch>
      <Route path='/book/:airline/:id/' component={BookFlight} />
      <Route path='/' component={ListFlights} />
    </Switch>
    <Footer />
  </div>
);

export default App;
