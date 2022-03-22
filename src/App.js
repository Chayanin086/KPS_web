import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './page/Home';
import Products from './page/Products';
import Performance from './page/Performance';
import Contactus from './page/Contactus';
import Detail  from './page/Detail';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Reward from './components/Reward';
// import api from "./utils/api";


function App() {
   //const { data} = api.get("https://admin.kps.eonlineshop.net/api/v1/product");
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
          <Route path='/Reward' component={Reward} />
          
        </Switch>
      </Router>
    
    </>
  );
}

export default App;