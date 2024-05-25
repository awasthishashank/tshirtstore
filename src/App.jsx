import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TshirtProvider } from './store/TshirtContext';
import Navbar from './components/Navbar';
import AddTshirtForm from './components/AddTshirtForm';
import TshirtList from './components/TshirtList';
import Cart from './components/Cart';

const App = () => {
  return (
    <TshirtProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <AddTshirtForm />
              <TshirtList />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </TshirtProvider>
  );
};

export default App;
