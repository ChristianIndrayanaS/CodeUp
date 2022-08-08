import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from '../src/components/navbar/Navbar';

import Home from './pages/home/Home'

class App extends Component {
  render() { 
    return ( 
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>  
      </Router>
      
    );
  }
}
 
export default App;

