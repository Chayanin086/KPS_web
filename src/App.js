import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/page/Home';
import Products from './components/page/Products';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
        </Switch>

      </Router>
    
    </>
  );
}

export default App;