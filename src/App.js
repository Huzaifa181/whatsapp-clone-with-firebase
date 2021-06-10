import React, { useEffect,useState } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';

import 'antd/dist/antd.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import Login from './Login'
import './App.css'
import {useStateValue} from './StateProvider'

function App() {
  const [{user},dispatch]=useStateValue();
  console.log(useStateValue)
  return (
    <div className='app'>
      {!user?<Login/>: 
        <div className='app__body'>
          <Router> 
            <Switch>
              <Route path='/rooms/:roomId'>
                <Sidebar/>
                <Chat/>
              </Route> 
              <Route path='/'>
              <Sidebar/>
              </Route>
            </Switch>
          </Router> 
        
        
        </div>      
}
  </div>
  );
}

export default App;
