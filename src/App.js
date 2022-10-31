import React, {useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import FadeLoader from "react-spinners/FadeLoader";
import Loader from './components/loader/loader';

import Home from './pages/home/Home';
// import Grade from './pages/grade/Grade';
import Kinder from './pages/grade/CuKinder';
import Teenager from './pages/grade/CuTeenager';
import Adult from './pages/grade/CuAdult';
import Program from './pages/program/Program';
import Login from './components/login/Login';
import Dashboard from './pages/dashboard/Dashboard';

export default function App() {
  const [loading,setLoading] = useState(false);
    useEffect(()=>{
        // setLoading(true);
        // setTimeout(()=>{
        //   setLoading(false);
        // },5000)
        // if(window.onload){
        //   setLoading(true);
        // }
        // else{
        //   setLoading(false);
        // }
        document.onreadystatechange = function(){
          if(document.readyState !== "complete"){
            setLoading(true);
          }
          else if(document.readyState === "complete"){
            setLoading(false);
          }
        }
    },[])
  return (
    <>
        {
          
          loading?
          <Loader loading={loading}/>
          :
          
          <Router>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/kinder" element={<Kinder />}></Route>
                <Route path="/teenager" element={<Teenager />}></Route>
                <Route path="/adult" element={<Adult />}></Route>
                <Route path="/program" element={<Program />}></Route>
                <Route path="/cuteacher" element={<Login />}></Route>
                <Route path="/cuteacher/dashboard" element={<Dashboard />}></Route>
              </Routes>
          </Router>

        }
        
      </>
  )
}


