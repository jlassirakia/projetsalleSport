import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Components/Navbar"


import Routes from "./Routes";





function App() {
  return (




    <main >
     
 <Router >
     <Navbar></Navbar> <br></br><br></br>
  <Routes/>
    </Router>
   
      </main>


    
  );
}

export default App;
