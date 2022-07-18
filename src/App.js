import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./Components/home/index";
import Navbar from './Components/home/nav';
import Footer from './Components/home/footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'





function App() {
  return (
    <div>
      <section>
        <Navbar/>
      </section>

       <Router>
          <Route exact path="/" component={Index} /> 
         

          
      </Router>

      <Footer/>

     
    
    </div>
  );
}

export default App;
