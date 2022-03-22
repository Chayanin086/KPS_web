import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/page/Home';
import Products from './components/page/Products';
import Performance from './components/page/Performance';
import Contactus from './components/page/Contactus';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import api from "./utils/api";
import Detail  from './components/page/Detail';

function App() {
   const { data} = api.get("https://admin.kps.eonlineshop.net/api/v1/product");
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/performance' component={Performance} />
          <Route path='/contact' component={Contactus} />
          <Route path='/detail/:id' component={Detail} />
          
        </Switch>
      </Router>
    
    </>
  );
}

export default App;